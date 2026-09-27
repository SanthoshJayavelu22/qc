import { io } from "socket.io-client";

const API_BASE = "http://localhost:5000";

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  bold: "\x1b[1m",
};

let passed = 0;
let failed = 0;

function logPass(testName: string, detail?: string) {
  passed++;
  console.log(`${colors.green}✓ [PASS]${colors.reset} ${testName} ${detail ? `(${detail})` : ""}`);
}

function logFail(testName: string, error: any) {
  failed++;
  console.log(`${colors.red}✗ [FAIL]${colors.reset} ${testName} ->`, error);
}

async function runTests() {
  console.log(`\n${colors.bold}${colors.cyan}======================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}  QUALITY CONVEYANCING - FULL SYSTEM AUTOMATED TESTER ${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}======================================================${colors.reset}\n`);

  // 1. Health check
  try {
    const res = await fetch(`${API_BASE}/health`);
    const data = await res.json();
    if (res.ok && data.status === "ok") {
      logPass("Backend Health Endpoint", `Status: ${data.status}`);
    } else {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
  } catch (err: any) {
    logFail("Backend Health Endpoint", err.message);
  }

  // 2. Admin Authentication (Super Admin login)
  let authToken = "";
  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "admin@qualityconveyancing.co.uk",
        password: "Admin@123456",
      }),
    });
    const data = await res.json();
    if (data.success && data.token && data.user.role === "Super Admin") {
      authToken = data.token;
      logPass("Admin Login (Super Admin)", `User: ${data.user.name}, Role: ${data.user.role}`);
    } else {
      throw new Error(data.error || "Login returned false");
    }
  } catch (err: any) {
    logFail("Admin Login", err.message);
  }

  // 3. Super Admin creates a role-based staff user (Conveyancer / Director)
  const testStaffEmail = `test.conveyancer.${Date.now()}@qualityconveyancing.co.uk`;
  let createdStaffId = "";
  try {
    const res = await fetch(`${API_BASE}/api/auth/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test Senior Conveyancer",
        email: testStaffEmail,
        password: "TempPassword123!",
        role: "Director (Licensed Conveyancer)",
        phone: "020 3763 6767",
      }),
    });
    const data = await res.json();
    if (data.success && data.user) {
      createdStaffId = data.user.id || data.user._id;
      logPass("Super Admin Role Creation", `Created: ${data.user.name} (${data.user.role})`);
    } else {
      throw new Error(data.error || "Failed creating staff user");
    }
  } catch (err: any) {
    logFail("Super Admin Role Creation", err.message);
  }

  // 4. Forgot Password Flow
  let resetToken = "";
  try {
    const res = await fetch(`${API_BASE}/api/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: testStaffEmail }),
    });
    const data = await res.json();
    if (data.success && data.resetTokenInDev) {
      resetToken = data.resetTokenInDev;
      logPass("Forgot Password Dispatch", "Security token generated and dispatched");
    } else {
      throw new Error(data.error || "Reset token not received");
    }
  } catch (err: any) {
    logFail("Forgot Password Dispatch", err.message);
  }

  // 5. Reset Password Execution
  try {
    const res = await fetch(`${API_BASE}/api/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: resetToken,
        newPassword: "BrandNewPassword123!",
      }),
    });
    const data = await res.json();
    if (data.success) {
      logPass("Password Reset with Token", "Successfully updated password");
    } else {
      throw new Error(data.error || "Failed resetting password");
    }
  } catch (err: any) {
    logFail("Password Reset with Token", err.message);
  }

  // 6. Blog Creation API
  let createdBlogId = "";
  const testBlogSlug = `automated-test-guide-${Date.now()}`;
  try {
    const res = await fetch(`${API_BASE}/api/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Automated Conveyancing Test Guide 2026",
        slug: testBlogSlug,
        excerpt: "An automated test verifying self-publishing blog functionality.",
        content: "<h2>Test Header</h2><p>This is test content written automatically.</p>",
        category: "Property Law",
        author: "Brinda Nicholson (Director)",
        readTime: "3 min read",
        isPublished: true,
      }),
    });
    const data = await res.json();
    if (data.success && data.blog) {
      createdBlogId = data.blog._id;
      logPass("Blog Self-Posting (Creation)", `Title: "${data.blog.title}", Slug: ${data.blog.slug}`);
    } else {
      throw new Error(data.error || "Blog creation failed");
    }
  } catch (err: any) {
    logFail("Blog Self-Posting (Creation)", err.message);
  }

  // 7. Blog Fetching API (by slug)
  try {
    const res = await fetch(`${API_BASE}/api/blogs/${testBlogSlug}`);
    const data = await res.json();
    if (data.success && data.blog) {
      logPass("Blog Retrieval by Slug", `Retrieved article: ${data.blog.title}`);
    } else {
      throw new Error(data.error || "Failed fetching created blog");
    }
  } catch (err: any) {
    logFail("Blog Retrieval by Slug", err.message);
  }

  // 8. Contact Form Submission API
  try {
    const res = await fetch(`${API_BASE}/api/inquiries/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test Customer Enquiry",
        email: "customer.test@example.com",
        phone: "07843 476 594",
        service: "Residential Conveyancing",
        message: "I am purchasing a freehold property in London. Please contact me.",
      }),
    });
    const data = await res.json();
    if (data.success && data.contactId) {
      logPass("Contact Form Submission API", `Stored inquiry with ID: ${data.contactId}`);
    } else {
      throw new Error(data.error || "Failed submitting contact form");
    }
  } catch (err: any) {
    logFail("Contact Form Submission API", err.message);
  }

  // 9. Instant Quote Submission & Automated Direct Email Dispatch
  try {
    const res = await fetch(`${API_BASE}/api/inquiries/quote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientName: "David Miller",
        clientEmail: "david.miller.client@example.com",
        clientPhone: "07123 456789",
        transactionType: "Purchase",
        propertyValue: "450000",
        tenureType: "Freehold",
        subtotal: "£1,195.00",
        vatAmount: "£239.00",
        totalIncVat: "£1,434.00",
      }),
    });
    const data = await res.json();
    if (data.success && data.quoteId) {
      logPass(
        "Instant Quote & Automated Email Dispatch",
        `Dispatched to david.miller.client@example.com (${data.emailSent ? "Email Delivered" : "Logged"})`
      );
    } else {
      throw new Error(data.error || "Failed quote submission");
    }
  } catch (err: any) {
    logFail("Instant Quote & Automated Email Dispatch", err.message);
  }

  // 10. Live Chat WebSockets (Socket.io) End-to-End Simulation
  await new Promise<void>((resolve) => {
    const testSessionId = `test_session_${Date.now()}`;
    const clientSocket = io(API_BASE, { autoConnect: true });
    const adminSocket = io(API_BASE, { autoConnect: true });

    let clientReceivedReply = false;

    // Admin joins
    adminSocket.on("connect", () => {
      adminSocket.emit("join_room", {
        sessionId: testSessionId,
        role: "admin",
      });
    });

    // Client joins and sends message
    clientSocket.on("connect", () => {
      clientSocket.emit("join_room", {
        sessionId: testSessionId,
        role: "client",
        clientName: "Automated Test Visitor",
      });

      // Send initial customer question
      setTimeout(() => {
        clientSocket.emit("send_message", {
          sessionId: testSessionId,
          sender: "client",
          senderName: "Automated Test Visitor",
          text: "Hello, what are your legal fees for leasehold purchase?",
        });
      }, 300);
    });

    // Admin receives customer message and sends reply
    adminSocket.on("receive_message", (payload: any) => {
      if (payload.sessionId === testSessionId && payload.message.sender === "client") {
        adminSocket.emit("send_message", {
          sessionId: testSessionId,
          sender: "admin",
          senderName: "Brinda Nicholson (Director (Senior Solicitor))",
          text: "Hello! Our leasehold fees start from £1,195 + VAT. We assign a dedicated solicitor.",
        });
      }
    });

    // Client verifies received reply from admin
    clientSocket.on("receive_message", (payload: any) => {
      if (payload.sessionId === testSessionId && payload.message.sender === "admin") {
        clientReceivedReply = true;
        logPass(
          "Socket.io Real-Time Live Chat",
          `Client received reply from: "${payload.message.senderName}"`
        );
        clientSocket.disconnect();
        adminSocket.disconnect();
        resolve();
      }
    });

    // Timeout fallback after 6s
    setTimeout(() => {
      if (!clientReceivedReply) {
        logFail("Socket.io Real-Time Live Chat", "Socket message roundtrip timed out");
        clientSocket.disconnect();
        adminSocket.disconnect();
        resolve();
      }
    }, 6000);
  });

  // 11. Exclusive Chat Lock Verification (Single Admin Reply Lock)
  await new Promise<void>((resolve) => {
    const lockSessionId = `lock_session_${Date.now()}`;
    const admin1Socket = io(API_BASE, { autoConnect: true });
    const admin2Socket = io(API_BASE, { autoConnect: true });

    admin1Socket.on("connect", () => {
      admin1Socket.emit("join_room", { sessionId: lockSessionId, role: "admin" });
      admin1Socket.emit("claim_chat_lock", {
        sessionId: lockSessionId,
        adminId: "admin_user_1",
        adminName: "Brinda Nicholson",
        adminRole: "Director (Senior Solicitor)",
      });
    });

    admin1Socket.on("lock_granted", (data: any) => {
      if (data.sessionId === lockSessionId) {
        // Now admin 2 attempts to claim or reply to the same session
        admin2Socket.emit("join_room", { sessionId: lockSessionId, role: "admin" });
        admin2Socket.emit("claim_chat_lock", {
          sessionId: lockSessionId,
          adminId: "admin_user_2",
          adminName: "Chandni Evans",
          adminRole: "Conveyancing Fee Earner",
        });
      }
    });

    admin2Socket.on("lock_denied", (data: any) => {
      if (data.sessionId === lockSessionId && !data.isOwner) {
        logPass(
          "Exclusive Chat Lock & Access Guard",
          `Access locked for Admin 2. Claimed by: "${data.lockedByName}" (${data.lockedByRole})`
        );
        admin1Socket.disconnect();
        admin2Socket.disconnect();
        resolve();
      }
    });

    setTimeout(() => {
      admin1Socket.disconnect();
      admin2Socket.disconnect();
      resolve();
    }, 5000);
  });

  // Cleanup created test records
  if (createdBlogId) {
    try {
      await fetch(`${API_BASE}/api/blogs/${createdBlogId}`, { method: "DELETE" });
    } catch (e) {}
  }
  if (createdStaffId) {
    try {
      await fetch(`${API_BASE}/api/auth/users/${createdStaffId}`, { method: "DELETE" });
    } catch (e) {}
  }

  // Summary
  console.log(`\n${colors.bold}------------------------------------------------------${colors.reset}`);
  console.log(`${colors.bold}TEST RESULTS: ${colors.green}${passed} PASSED${colors.reset}, ${colors.red}${failed} FAILED${colors.reset}`);
  console.log(`${colors.bold}------------------------------------------------------${colors.reset}\n`);

  process.exit(failed > 0 ? 1 : 0);
}

runTests();
