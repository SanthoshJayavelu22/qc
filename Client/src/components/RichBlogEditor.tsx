"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link2,
  Image as ImageIcon,
  Table as TableIcon,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  CheckCircle2,
  Code,
  Eye,
  Edit3,
  Search,
  Check,
  Info,
  Maximize2,
  Minimize2,
  FileText,
  Lightbulb,
  ExternalLink,
  ChevronDown,
  Layers,
} from "lucide-react";

interface RichBlogEditorProps {
  content: string;
  onChange: (html: string) => void;
  title: string;
  metaTitle?: string;
  onMetaTitleChange?: (metaTitle: string) => void;
  slug: string;
  onSlugChange: (slug: string) => void;
  excerpt: string;
  onExcerptChange: (excerpt: string) => void;
  tags: string;
  onTagsChange: (tags: string) => void;
  onImageUpload?: (file: File) => Promise<string | null>;
}

export default function RichBlogEditor({
  content,
  onChange,
  title,
  metaTitle = "",
  onMetaTitleChange,
  slug,
  onSlugChange,
  excerpt,
  onExcerptChange,
  tags,
  onTagsChange,
  onImageUpload,
}: RichBlogEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [viewMode, setViewMode] = useState<"visual" | "html" | "split">("visual");
  const [activeFormats, setActiveFormats] = useState<{ [key: string]: boolean }>({});
  const [internalMetaTitle, setInternalMetaTitle] = useState<string>(metaTitle);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [uploadingInline, setUploadingInline] = useState(false);

  useEffect(() => {
    setInternalMetaTitle(metaTitle);
  }, [metaTitle]);

  const currentMetaTitle = metaTitle !== undefined ? metaTitle : internalMetaTitle;
  const handleMetaTitleChange = (val: string) => {
    setInternalMetaTitle(val);
    if (onMetaTitleChange) {
      onMetaTitleChange(val);
    }
  };

  // Sync content with contentEditable when switching or initializing
  useEffect(() => {
    if (editorRef.current && viewMode !== "html") {
      if (editorRef.current.innerHTML !== content) {
        editorRef.current.innerHTML = content || "<p><br></p>";
      }
    }
  }, [content, viewMode]);

  // Update active format indicator on selection change
  const updateActiveFormats = () => {
    if (typeof document === "undefined") return;
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      strikeThrough: document.queryCommandState("strikeThrough"),
      insertUnorderedList: document.queryCommandState("insertUnorderedList"),
      insertOrderedList: document.queryCommandState("insertOrderedList"),
    });
  };

  const handleEditorInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
      updateActiveFormats();
    }
  };

  const execCmd = (command: string, value: string | undefined = undefined) => {
    if (typeof document === "undefined") return;
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
      updateActiveFormats();
    }
  };

  // Insert custom semantic HTML section blocks
  const insertCustomHTML = (htmlSnippet: string) => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      const el = document.createElement("div");
      el.innerHTML = htmlSnippet;
      const frag = document.createDocumentFragment();
      let node: ChildNode | null;
      let lastNode: ChildNode | null = null;
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);
      if (lastNode) {
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    } else {
      execCmd("insertHTML", htmlSnippet);
    }
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const promptLink = () => {
    const url = prompt("Enter the destination URL (e.g. https://www.gov.uk/stamp-duty):", "https://");
    if (url && url !== "https://") {
      execCmd("createLink", url);
    }
  };

  const promptImageURL = () => {
    const url = prompt("Enter image web address (URL):", "https://");
    if (url) {
      const alt = prompt("Enter SEO Alt Text describing this image:", "Quality Conveyancing guide illustration") || "Legal article image";
      const imgHtml = `
        <figure class="my-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <img src="${url}" alt="${alt}" class="w-full h-auto object-cover max-h-[480px]" />
          <figcaption class="text-center text-xs text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-sans italic">${alt}</figcaption>
        </figure>
      `;
      insertCustomHTML(imgHtml);
    }
  };

  const handleInlineImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onImageUpload) return;
    try {
      setUploadingInline(true);
      const url = await onImageUpload(file);
      if (url) {
        const alt = prompt("Enter SEO Alt Text for this image (recommended for Google Search):", file.name.replace(/\.[^/.]+$/, "")) || "Quality Conveyancing article photo";
        const imgHtml = `
          <figure class="my-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="${url}" alt="${alt}" class="w-full h-auto object-cover max-h-[480px]" />
            <figcaption class="text-center text-xs text-gray-500 py-2 bg-gray-50 border-t border-gray-100 font-sans italic">${alt}</figcaption>
          </figure>
        `;
        insertCustomHTML(imgHtml);
      }
    } finally {
      setUploadingInline(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // Prebuilt Ready-to-Use SEO Content Section Templates
  const insertTemplate = (type: string) => {
    switch (type) {
      case "key_takeaways":
        insertCustomHTML(`
          <div class="my-6 p-5 rounded-2xl bg-[#005f73]/5 border-l-4 border-[#005f73] shadow-xs">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-sm font-bold uppercase tracking-wider text-[#005f73]">📌 Key Legal Takeaways</span>
            </div>
            <ul class="list-disc list-inside space-y-1.5 text-sm text-gray-800 font-sans">
              <li><strong>Critical rule:</strong> Summarise the first core legal takeaway here.</li>
              <li><strong>Timeframe:</strong> Typical completion or filing window to keep in mind.</li>
              <li><strong>Cost impact:</strong> Summary of fees or statutory liability involved.</li>
            </ul>
          </div>
          <p><br></p>
        `);
        break;

      case "warning_box":
        insertCustomHTML(`
          <div class="my-6 p-5 rounded-2xl bg-amber-50 border-l-4 border-amber-500 text-amber-900 shadow-xs">
            <div class="flex items-center gap-2 mb-2 font-bold text-sm tracking-wide text-amber-800">
              ⚠️ Important Legal Notice
            </div>
            <p class="text-sm leading-relaxed">
              Ensure you obtain independent legal advice prior to exchanging contracts. Failure to disclose material boundary alterations or unpermitted leasehold works may jeopardize mortgage approval.
            </p>
          </div>
          <p><br></p>
        `);
        break;

      case "faq_section":
        insertCustomHTML(`
          <div class="my-8 space-y-4">
            <h3 class="text-xl font-serif font-bold text-[#0f2338]">Frequently Asked Questions</h3>
            <div class="p-4 rounded-xl border border-gray-200 bg-gray-50/70">
              <h4 class="font-bold text-sm text-[#0f2338] mb-1">Q: How long does this process typically take in England & Wales?</h4>
              <p class="text-sm text-gray-700">A: On average, a straightforward conveyancing transaction completes within 8 to 12 weeks from receipt of draft contract documents.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-200 bg-gray-50/70">
              <h4 class="font-bold text-sm text-[#0f2338] mb-1">Q: What documents are required before exchange?</h4>
              <p class="text-sm text-gray-700">A: Certified Photo ID, proof of source of funds, signed contract papers, and satisfactory local authority search results.</p>
            </div>
          </div>
          <p><br></p>
        `);
        break;

      case "steps_guide":
        insertCustomHTML(`
          <div class="my-8">
            <h3 class="text-xl font-serif font-bold text-[#0f2338] mb-4">Step-by-Step Conveyancing Procedure</h3>
            <div class="space-y-3 font-sans">
              <div class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 bg-white">
                <span class="w-7 h-7 rounded-full bg-[#005f73] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <div>
                  <h4 class="font-bold text-sm text-gray-900">Initial Instruction & ID Onboarding</h4>
                  <p class="text-xs text-gray-600 mt-0.5">Verification of identity and AML anti-money laundering compliance checks.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 bg-white">
                <span class="w-7 h-7 rounded-full bg-[#005f73] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <div>
                  <h4 class="font-bold text-sm text-gray-900">Searches & Title Examination</h4>
                  <p class="text-xs text-gray-600 mt-0.5">Submitting Local Authority, Drainage & Water, and Environmental search enquiries.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 bg-white">
                <span class="w-7 h-7 rounded-full bg-[#005f73] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <div>
                  <h4 class="font-bold text-sm text-gray-900">Exchange of Contracts & Completion</h4>
                  <p class="text-xs text-gray-600 mt-0.5">Contracts become legally binding and purchase monies are remitted on completion day.</p>
                </div>
              </div>
            </div>
          </div>
          <p><br></p>
        `);
        break;

      case "cta_quote":
        insertCustomHTML(`
          <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-[#0f2338] to-[#1a3854] text-white shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
            <div class="space-y-1">
              <h4 class="text-lg font-serif font-bold text-white">Need Fixed-Fee Legal Guidance for Your Move?</h4>
              <p class="text-xs text-slate-300 max-w-md">
                Get an instant, itemised conveyancing quote with transparent Land Registry fees, SDLT calculations, and no hidden surprises.
              </p>
            </div>
            <a href="/quote" target="_blank" class="shrink-0 bg-[#005f73] hover:bg-[#007b8a] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition shadow-md">
              Calculate Instant Quote →
            </a>
          </div>
          <p><br></p>
        `);
        break;

      case "stat_table":
        insertCustomHTML(`
          <div class="my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table class="min-w-full text-xs text-left text-gray-700 font-sans">
              <thead class="bg-gray-100 text-gray-900 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200">
                <tr>
                  <th class="px-4 py-3">Property Value Threshold</th>
                  <th class="px-4 py-3">First-Time Buyer SDLT</th>
                  <th class="px-4 py-3">Next Home Buyer SDLT</th>
                  <th class="px-4 py-3">Additional Home (Surcharge)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td class="px-4 py-3 font-semibold text-gray-900">Up to £125,000</td>
                  <td class="px-4 py-3 text-emerald-700 font-bold">0%</td>
                  <td class="px-4 py-3 text-emerald-700 font-bold">0%</td>
                  <td class="px-4 py-3 text-amber-700 font-bold">5%</td>
                </tr>
                <tr class="bg-gray-50/50">
                  <td class="px-4 py-3 font-semibold text-gray-900">£125,001 to £250,000</td>
                  <td class="px-4 py-3 text-emerald-700 font-bold">0%</td>
                  <td class="px-4 py-3 font-semibold">2%</td>
                  <td class="px-4 py-3 text-amber-700 font-bold">7%</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 font-semibold text-gray-900">£250,001 to £300,000</td>
                  <td class="px-4 py-3 text-emerald-700 font-bold">0%</td>
                  <td class="px-4 py-3 font-semibold">5%</td>
                  <td class="px-4 py-3 text-amber-700 font-bold">10%</td>
                </tr>
                <tr class="bg-gray-50/50">
                  <td class="px-4 py-3 font-semibold text-gray-900">£300,001 to £500,000</td>
                  <td class="px-4 py-3 font-semibold">5%</td>
                  <td class="px-4 py-3 font-semibold">5%</td>
                  <td class="px-4 py-3 text-amber-700 font-bold">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p><br></p>
        `);
        break;

      default:
        break;
    }
  };

  // SEO Real-Time Metrics & Checks
  const plainText = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = plainText ? plainText.split(/\s+/).length : 0;
  const estimatedReadMin = Math.max(1, Math.ceil(wordCount / 200));

  // Check H2 and H3 occurrences
  const h2Count = (content.match(/<h2/gi) || []).length;
  const h3Count = (content.match(/<h3/gi) || []).length;
  const imgCount = (content.match(/<img/gi) || []).length;
  const linkCount = (content.match(/<a/gi) || []).length;

  // SEO score calculation (0 - 100)
  let seoScore = 0;
  const checks: { label: string; passed: boolean; tip: string }[] = [];

  // 1. Meta Title / SEO Title Length
  const activeTitle = currentMetaTitle.trim() || title.trim();
  const titleLen = activeTitle.length;
  const titleOk = titleLen >= 35 && titleLen <= 65;
  checks.push({
    label: "SEO / Meta Title Length (35-65 chars)",
    passed: titleOk,
    tip: `Current: ${titleLen} characters.${currentMetaTitle.trim() ? " (Using custom Meta Title)" : " (Defaulting to Article Title)"} Aim for 50-60 characters for optimal Google SERP display.`,
  });
  if (titleOk) seoScore += 25;
  else if (titleLen > 15) seoScore += 15;

  // 2. Meta Excerpt Length
  const excerptLen = excerpt.trim().length;
  const excerptOk = excerptLen >= 80 && excerptLen <= 165;
  checks.push({
    label: "Meta Description / Excerpt (80-165 chars)",
    passed: excerptOk,
    tip: `Current: ${excerptLen} characters. Google clips descriptions over 160 characters.`,
  });
  if (excerptOk) seoScore += 25;
  else if (excerptLen > 30) seoScore += 15;

  // 3. Headings Structure
  const headingsOk = h2Count >= 2;
  checks.push({
    label: "Subheadings (at least 2 H2 headers)",
    passed: headingsOk,
    tip: `Found ${h2Count} H2 headings. Use H2s to break content into scannable topics.`,
  });
  if (headingsOk) seoScore += 25;
  else if (h2Count === 1) seoScore += 15;

  // 4. Content Length
  const wordsOk = wordCount >= 300;
  checks.push({
    label: "Substantive Content (300+ words)",
    passed: wordsOk,
    tip: `Found ${wordCount} words. High-ranking legal guides typically exceed 600+ words.`,
  });
  if (wordCount >= 600) seoScore += 25;
  else if (wordsOk) seoScore += 20;
  else if (wordCount > 100) seoScore += 10;

  const getScoreColor = (s: number) => {
    if (s >= 80) return "text-emerald-700 bg-emerald-50 border-emerald-200";
    if (s >= 50) return "text-amber-700 bg-amber-50 border-amber-200";
    return "text-rose-700 bg-rose-50 border-rose-200";
  };

  return (
    <div className={`space-y-6 ${isFullscreen ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto" : ""}`}>
      {/* Hidden file input for inline image upload */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleInlineImageUpload}
        className="hidden"
      />

      {/* ========================================================================= */}
      {/* 1. VISUAL CK-EDITOR WORKBENCH */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        {/* Top Control Bar: Mode Toggle & View Options */}
        <div className="bg-[#f8fafc] border-b border-gray-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 bg-gray-200/80 p-0.5 rounded-lg text-xs font-semibold">
            <button
              type="button"
              onClick={() => setViewMode("visual")}
              className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition ${
                viewMode === "visual" ? "bg-white text-gray-900 shadow-xs" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Edit3 className="w-3.5 h-3.5 text-[#005f73]" />
              Visual Editor
            </button>
            <button
              type="button"
              onClick={() => setViewMode("split")}
              className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition ${
                viewMode === "split" ? "bg-white text-gray-900 shadow-xs" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#005f73]" />
              Split Preview
            </button>
            <button
              type="button"
              onClick={() => setViewMode("html")}
              className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition ${
                viewMode === "html" ? "bg-white text-gray-900 shadow-xs" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Code className="w-3.5 h-3.5 text-[#005f73]" />
              HTML Source
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-[#005f73]" />
              <strong>{wordCount}</strong> words
            </span>
            <span>•</span>
            <span>~{estimatedReadMin} min read</span>
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 hover:bg-gray-200 rounded-lg text-gray-600 transition ml-2"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Editor"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Rich Formatting Toolbar (Only in Visual or Split Mode) */}
        {viewMode !== "html" && (
          <div className="bg-white border-b border-gray-200 px-3 py-2 flex flex-wrap items-center gap-1">
            {/* Standard Text Formatting */}
            <div className="flex items-center gap-0.5 pr-2 border-r border-gray-200">
              <button
                type="button"
                onClick={() => execCmd("bold")}
                title="Bold (Ctrl+B)"
                className={`p-1.5 rounded-lg text-xs font-bold transition ${
                  activeFormats.bold ? "bg-[#005f73] text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Bold className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => execCmd("italic")}
                title="Italic (Ctrl+I)"
                className={`p-1.5 rounded-lg text-xs transition ${
                  activeFormats.italic ? "bg-[#005f73] text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Italic className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => execCmd("underline")}
                title="Underline (Ctrl+U)"
                className={`p-1.5 rounded-lg text-xs transition ${
                  activeFormats.underline ? "bg-[#005f73] text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Underline className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => execCmd("strikeThrough")}
                title="Strikethrough"
                className={`p-1.5 rounded-lg text-xs transition ${
                  activeFormats.strikeThrough ? "bg-[#005f73] text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Strikethrough className="w-4 h-4" />
              </button>
            </div>

            {/* Headings for SEO */}
            <div className="flex items-center gap-0.5 px-2 border-r border-gray-200">
              <button
                type="button"
                onClick={() => execCmd("formatBlock", "<h2>")}
                title="Section Heading H2 (Recommended for Major Sections)"
                className="px-2 py-1 rounded-lg text-xs font-bold hover:bg-gray-100 text-gray-800 flex items-center gap-1"
              >
                <Heading2 className="w-4 h-4 text-[#005f73]" />
                <span>H2</span>
              </button>
              <button
                type="button"
                onClick={() => execCmd("formatBlock", "<h3>")}
                title="Subheading H3 (Recommended for Sub-topics)"
                className="px-2 py-1 rounded-lg text-xs font-bold hover:bg-gray-100 text-gray-800 flex items-center gap-1"
              >
                <Heading3 className="w-4 h-4 text-[#005f73]" />
                <span>H3</span>
              </button>
              <button
                type="button"
                onClick={() => execCmd("formatBlock", "<p>")}
                title="Regular Paragraph text"
                className="px-2 py-1 rounded-lg text-xs font-medium hover:bg-gray-100 text-gray-700"
              >
                Paragraph
              </button>
            </div>

            {/* Lists & Quotes */}
            <div className="flex items-center gap-0.5 px-2 border-r border-gray-200">
              <button
                type="button"
                onClick={() => execCmd("insertUnorderedList")}
                title="Bullet List"
                className={`p-1.5 rounded-lg text-xs transition ${
                  activeFormats.insertUnorderedList ? "bg-[#005f73] text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => execCmd("insertOrderedList")}
                title="Numbered Step List"
                className={`p-1.5 rounded-lg text-xs transition ${
                  activeFormats.insertOrderedList ? "bg-[#005f73] text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <ListOrdered className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => execCmd("formatBlock", "<blockquote>")}
                title="Quote Block"
                className="p-1.5 rounded-lg text-xs hover:bg-gray-100 text-gray-700"
              >
                <Quote className="w-4 h-4" />
              </button>
            </div>

            {/* Media & Links */}
            <div className="flex items-center gap-0.5 px-2 border-r border-gray-200">
              <button
                type="button"
                onClick={promptLink}
                title="Insert Web Link (anchor tag)"
                className="p-1.5 rounded-lg text-xs hover:bg-gray-100 text-gray-700 flex items-center gap-1"
              >
                <Link2 className="w-4 h-4 text-[#005f73]" />
                <span className="hidden sm:inline">Link</span>
              </button>

              <button
                type="button"
                onClick={promptImageURL}
                title="Insert Image by Web URL"
                className="p-1.5 rounded-lg text-xs hover:bg-gray-100 text-gray-700 flex items-center gap-1"
              >
                <ImageIcon className="w-4 h-4 text-[#005f73]" />
                <span className="hidden sm:inline">Image URL</span>
              </button>

              {onImageUpload && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload Image from computer and insert inline"
                  disabled={uploadingInline}
                  className="px-2 py-1 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center gap-1"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-teal-700" />
                  <span>{uploadingInline ? "Uploading..." : "Upload Pic"}</span>
                </button>
              )}
            </div>

            {/* Instant Content Sections Dropdown */}
            <div className="flex items-center gap-1 pl-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-1 hidden sm:inline">
                Insert Sections:
              </span>
              <button
                type="button"
                onClick={() => insertTemplate("key_takeaways")}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#005f73]/10 hover:bg-[#005f73]/20 text-[#005f73] flex items-center gap-1 transition"
                title="Insert Key Takeaways Callout Box"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Takeaways</span>
              </button>

              <button
                type="button"
                onClick={() => insertTemplate("warning_box")}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-100/70 hover:bg-amber-100 text-amber-900 flex items-center gap-1 transition"
                title="Insert Important Notice / Alert Box"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Notice Box</span>
              </button>

              <button
                type="button"
                onClick={() => insertTemplate("faq_section")}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-900 flex items-center gap-1 transition"
                title="Insert Structured FAQ Accordion Blocks"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FAQ Block</span>
              </button>

              <button
                type="button"
                onClick={() => insertTemplate("steps_guide")}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center gap-1 transition hidden md:flex"
                title="Insert Step-by-Step Guide Section"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Step Guide</span>
              </button>

              <button
                type="button"
                onClick={() => insertTemplate("cta_quote")}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#0f2338] text-white hover:bg-[#1a3854] flex items-center gap-1 transition"
                title="Insert Instant Quote Lead Capture CTA Banner"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                <span>Quote CTA</span>
              </button>

              <button
                type="button"
                onClick={() => insertTemplate("stat_table")}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center gap-1 transition hidden lg:flex"
                title="Insert Comparison Rate Table"
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Fee Table</span>
              </button>
            </div>
          </div>
        )}

        {/* Editor Body */}
        <div className="relative min-h-[380px] flex">
          {/* Visual Mode / Split Left Side */}
          {viewMode !== "html" && (
            <div
              ref={editorRef}
              contentEditable
              onInput={handleEditorInput}
              onKeyUp={updateActiveFormats}
              onMouseUp={updateActiveFormats}
              className={`p-6 outline-none overflow-y-auto prose prose-slate max-w-none text-sm text-gray-800 leading-relaxed font-sans ${
                viewMode === "split" ? "w-1/2 border-r border-gray-200" : "w-full"
              }`}
              style={{ minHeight: "380px" }}
              data-placeholder="Start writing your article here, or use the 'Insert Sections' buttons above to place structured takeaways, FAQs, and step-by-step guides..."
            />
          )}

          {/* HTML Source View */}
          {viewMode === "html" && (
            <textarea
              value={content}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-full min-h-[380px] p-6 font-mono text-xs text-gray-800 bg-[#f8fafc] outline-none leading-relaxed resize-y border-0"
              placeholder="<h2>Your Heading</h2><p>Article paragraphs...</p>"
            />
          )}

          {/* Split Mode: Live Public Preview on Right */}
          {viewMode === "split" && (
            <div className="w-1/2 p-6 overflow-y-auto bg-gray-50/50" style={{ minHeight: "380px" }}>
              <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#005f73]" />
                Live Reader Preview
              </div>
              <div
                className="prose prose-slate max-w-none text-sm text-gray-800 leading-relaxed font-sans bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs"
                dangerouslySetInnerHTML={{ __html: content || "<p class='text-gray-400 italic'>No content yet. Type on the left to see live preview.</p>" }}
              />
            </div>
          )}
        </div>

        {/* Bottom Helper Bar */}
        <div className="bg-[#f8fafc] border-t border-gray-200 px-4 py-2 flex flex-wrap items-center justify-between text-[11px] text-gray-500 gap-2">
          <div className="flex items-center gap-4">
            <span>H2 Headings: <strong className="text-gray-800">{h2Count}</strong></span>
            <span>H3 Headings: <strong className="text-gray-800">{h3Count}</strong></span>
            <span>Images: <strong className="text-gray-800">{imgCount}</strong></span>
            <span>Links: <strong className="text-gray-800">{linkCount}</strong></span>
          </div>
          <div className="text-gray-400">
            Tip: Press Enter to create a new paragraph. Highlight any text to apply bold, italic, or links.
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. ADVANCED SEO & SEARCH OPTIMIZATION SUITE */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#005f73]">Search Engine Optimization</span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getScoreColor(seoScore)}`}>
                SEO Score: {seoScore}/100
              </span>
            </div>
            <h3 className="text-lg font-serif font-bold text-gray-900 mt-1">
              Google SERP & Snippet Optimization
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Ensure this article ranks high on Google by optimizing the URL slug, meta title, and meta description.
            </p>
          </div>

          {/* Quick Auto-Slug Generator */}
          <button
            type="button"
            onClick={() => {
              if (title) {
                const generated = title
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, "")
                  .replace(/[\s_-]+/g, "-")
                  .replace(/^-+|-+$/g, "");
                onSlugChange(generated);
              }
            }}
            className="text-xs font-semibold text-[#005f73] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Auto-generate Slug from Title
          </button>
        </div>

        {/* Inputs Grid: Slug, Meta Title & Tags */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Permanent URL Slug *
              </label>
              <span className="text-[10px] text-gray-400 font-mono">/blogs/{slug || "..."}</span>
            </div>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => onSlugChange(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
              placeholder="e.g. stamp-duty-rates-2026-guide"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-3.5 py-2 text-xs font-mono text-gray-800 focus:outline-none focus:border-[#005f73]"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Meta Title
              </label>
              <span
                className={`text-[10px] font-mono font-semibold ${
                  (currentMetaTitle || title).length > 65
                    ? "text-rose-600"
                    : (currentMetaTitle || title).length >= 40
                    ? "text-emerald-700"
                    : "text-gray-400"
                }`}
              >
                {(currentMetaTitle || title).length}/60 chars
              </span>
            </div>
            <input
              type="text"
              value={currentMetaTitle}
              onChange={(e) => handleMetaTitleChange(e.target.value)}
              placeholder={title ? `Defaults to: ${title}` : "e.g. 2026 UK Stamp Duty Guide | Rates & Relief"}
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#005f73]"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Search Tags (comma separated)
              </label>
            </div>
            <input
              type="text"
              value={tags}
              onChange={(e) => onTagsChange(e.target.value)}
              placeholder="SDLT, Conveyancing, Property Fees, UK Law"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#005f73]"
            />
          </div>
        </div>

        {/* Excerpt / Meta Description with Character Counter */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-gray-800 uppercase tracking-wider">
              SEO Meta Description / Card Excerpt *
            </label>
            <span
              className={`text-xs font-mono font-semibold ${
                excerptLen > 165
                  ? "text-rose-600"
                  : excerptLen >= 120
                  ? "text-emerald-700"
                  : "text-gray-500"
              }`}
            >
              {excerptLen}/160 characters {excerptLen > 160 && "(Google may truncate)"}
            </span>
          </div>
          <textarea
            rows={2}
            required
            value={excerpt}
            onChange={(e) => onExcerptChange(e.target.value)}
            placeholder="Comprehensive guide to 2026 Stamp Duty Land Tax (SDLT) thresholds, rates for first-time buyers, home movers, and additional properties in England."
            className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl p-3 text-xs text-gray-800 leading-relaxed focus:outline-none focus:border-[#005f73]"
          />
        </div>

        {/* Real Google SERP Snippet Preview */}
        <div className="bg-[#f8fafc] rounded-xl p-4 border border-gray-200 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
            Google Search Snippet Preview
          </span>
          <div className="font-sans max-w-2xl bg-white p-4 rounded-xl border border-gray-100 shadow-2xs">
            <div className="text-[11px] text-gray-500 flex items-center gap-1.5 mb-1 truncate">
              <span className="w-4 h-4 rounded-full bg-[#005f73] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                QC
              </span>
              <span>https://qualityconveyancing.co.uk</span>
              <span className="text-gray-400">›</span>
              <span className="text-gray-600 truncate">blogs › {slug || "your-article-slug"}</span>
            </div>
            <h4 className="text-base text-[#1a0dab] hover:underline cursor-pointer font-medium leading-snug line-clamp-1">
              {currentMetaTitle || title || "Enter Article Title Here"} | Quality Conveyancing
            </h4>
            <p className="text-xs text-[#4d5156] mt-1 leading-relaxed line-clamp-2">
              {excerpt ||
                "Write an informative meta description above to display in search engine snippets and social sharing preview cards."}
            </p>
          </div>
        </div>

        {/* SEO Checklist Grid */}
        <div className="pt-2 border-t border-gray-200">
          <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-3">
            Search Engine Readiness Checklist
          </span>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {checks.map((chk, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                  chk.passed ? "bg-emerald-50/50 border-emerald-200" : "bg-gray-50 border-gray-200"
                }`}
              >
                {chk.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <Info className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className={`font-semibold ${chk.passed ? "text-emerald-900" : "text-gray-800"}`}>
                    {chk.label}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">{chk.tip}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
