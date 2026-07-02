import { useState } from "react";
import { useTranslation } from "react-i18next";

const SERVICES = [
  { id: "wash_iron", label: "services.washIron", price: 6 },
  { id: "wash_iron_perf", label: "services.washIronPerfume", price: 10 },
  { id: "dry_clean", label: "services.dryClean", price: 15 },
];

const CATEGORIES = [
  { id: "men", label: "categories.men", emoji: "🧑" },
  { id: "women", label: "categories.women", emoji: "👩" },
  { id: "other", label: "categories.other", emoji: "✨" },
];

const ITEMS = {
  men: [
    { id: "thobe", label: "items.men.thobe", emoji: "👘" },
    { id: "bisht", label: "items.men.bisht", emoji: "🧥" },
    { id: "suit", label: "items.men.suit", emoji: "🕴️" },
    { id: "ghutra", label: "items.men.ghutra", emoji: "🧣" },
    { id: "shirt", label: "items.men.shirt", emoji: "👕" },
    { id: "tie", label: "items.men.tie", emoji: "👔" },
    { id: "tshirt", label: "items.men.tshirt", emoji: "👕" },
    { id: "vest", label: "items.men.vest", emoji: "🦺" },
    { id: "coat", label: "items.men.coat", emoji: "🧥" },
    { id: "pajamas", label: "items.men.pajamas", emoji: "🩲" },
    { id: "shorts", label: "items.men.shorts", emoji: "🩳" },
    { id: "trousers", label: "items.men.trousers", emoji: "👖" },
    { id: "kandura", label: "items.men.kandura", emoji: "👘" },
    { id: "jubba", label: "items.men.jubba", emoji: "🥋" },
  ],
  women: [
    { id: "abaya", label: "items.women.abaya", emoji: "👗" },
    { id: "dress", label: "items.women.dress", emoji: "👗" },
    { id: "blouse", label: "items.women.blouse", emoji: "👚" },
    { id: "skirt", label: "items.women.skirt", emoji: "🩱" },
    { id: "jacket", label: "items.women.jacket", emoji: "🧥" },
    { id: "scarf", label: "items.women.scarf", emoji: "🧣" },
    { id: "shayla", label: "items.women.shayla", emoji: "🧕" },
    { id: "jalabiya", label: "items.women.jalabiya", emoji: "👗" },
    { id: "suit_w", label: "items.women.suit_w", emoji: "🕴️" },
    { id: "cardigan", label: "items.women.cardigan", emoji: "🧶" },
    { id: "trousers_w", label: "items.women.trousers_w", emoji: "👖" },
    { id: "pajamas_w", label: "items.women.pajamas_w", emoji: "🩲" },
  ],
  other: [
    { id: "blanket", label: "items.other.blanket", emoji: "🛏️" },
    { id: "curtain", label: "items.other.curtain", emoji: "🏠" },
    { id: "bedsheet", label: "items.other.bedsheet", emoji: "🛏️" },
    { id: "tablecloth", label: "items.other.tablecloth", emoji: "🍽️" },
    { id: "pillow", label: "items.other.pillow", emoji: "🛌" },
    { id: "duvet", label: "items.other.duvet", emoji: "🛏️" },
    { id: "towel", label: "items.other.towel", emoji: "🏖️" },
    { id: "carpet", label: "items.other.carpet", emoji: "🪨" },
  ],
};

const OUD_TYPES = [
  { id: "cambodian", label: "oudTypes.cambodian.label", desc: "oudTypes.cambodian.desc", price: 4, image: "/Images/fragrance.jpg" },
  { id: "bokhour", label: "oudTypes.bokhour.label", desc: "oudTypes.bokhour.desc", price: 4, image: "/Images/sadf.jpg" },
];

const PACKAGING_OPTIONS = [
  { id: "plastic", label: "packagingOptions.plastic.label", sub: "packagingOptions.plastic.sub", price: 0 },
  { id: "premium", label: "packagingOptions.premium.label", sub: "packagingOptions.premium.sub", price: 10, colors: ["gray", "cream", "black"] },
  { id: "giftbox", label: "packagingOptions.giftbox.label", sub: "packagingOptions.giftbox.sub", price: 4 },
];

export default function AkoyaBooking() {
  const { t } = useTranslation("Bookingtranslation");

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [garments, setGarments] = useState({});
  const [oudAnswer, setOudAnswer] = useState("no");
  const [oudType, setOudType] = useState(null);
  const [perfumeAnswer, setPerfumeAnswer] = useState("no");
  const [packaging, setPackaging] = useState({});
  const [giftAnswer, setGiftAnswer] = useState(null);
  const [friendName, setFriendName] = useState("");
  const [cardFrom, setCardFrom] = useState("");
  const [cardTo, setCardTo] = useState("");
  const [coupon, setCoupon] = useState("");

  const items = selectedCategory ? ITEMS[selectedCategory] : [];
  const groupLabel = selectedCategory
    ? t(`itemsSection.groupLabel.${selectedCategory}`)
    : "";
  const garmentList = Object.entries(garments);
  const hasAnyService = garmentList.length > 0;

  const oudPrice = oudAnswer === "yes" && oudType ? OUD_TYPES.find(o => o.id === oudType)?.price ?? 0 : 0;
  const packagingPrice = Object.values(packaging).reduce((s, p) => {
    const opt = PACKAGING_OPTIONS.find(o => o.id === p.optionId);
    return s + (opt?.price ?? 0);
  }, 0);
  const garmentsPrice = garmentList.reduce((s, [, g]) => s + g.price * g.qty, 0);
  const totalPrice = garmentsPrice + oudPrice + packagingPrice;

  const handleCategory = (id) => { setSelectedCategory(id); setExpandedItem(null); };

  const handleServiceSelect = (item, svc) => {
    setGarments(prev => ({
      ...prev,
      [item.id]: { qty: prev[item.id]?.qty || 1, serviceId: svc.id, serviceLabel: svc.label, price: svc.price, label: item.label, emoji: item.emoji },
    }));
  };

  const updateQty = (itemId, delta) => {
    setGarments(prev => {
      const g = prev[itemId];
      const nq = (g?.qty || 1) + delta;
      if (nq <= 0) { const { [itemId]: _, ...rest } = prev; return rest; }
      return { ...prev, [itemId]: { ...g, qty: nq } };
    });
  };

  const removeGarment = (itemId) => {
    setGarments(prev => { const { [itemId]: _, ...rest } = prev; return rest; });
  };

  const setPackagingFor = (itemId, optionId, color) => {
    setPackaging(prev => ({ ...prev, [itemId]: { optionId, colorChoice: color || prev[itemId]?.colorChoice } }));
  };

  const resetAll = () => {
    setSelectedCategory(null); setExpandedItem(null); setGarments({});
    setOudAnswer("no"); setOudType(null); setPerfumeAnswer("no");
    setPackaging({}); setGiftAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b2e1a] via-[#7a6540] to-[#c8b98a] font-sans flex flex-col items-center py-4  sm:py-8 px-2 sm:px-4">
      <div className="flex flex-col  md:flex-row mt-15 sm:mt-19 md:mt-20 gap-4 md:gap-6 w-full max-w-6xl items-stretch md:items-start">

        {/* ── MAIN CARD ── */}
        <div className="flex-1 w-full bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden max-h-[85vh] md:max-h-[92vh] min-w-0">

          {/* Header */}
          <div className="bg-[#3b2e1a] text-center py-4 sm:py-5 px-4 sm:px-8 border-b-2 border-[#b8973a] flex-shrink-0">
            <div className="text-[#b8973a] font-bold text-base sm:text-lg tracking-widest uppercase">{t("header.brand")}</div>
            <div className="text-gray-400 text-xs mt-1 tracking-wide">{t("header.step")}</div>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto flex-1 p-4 sm:p-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {/* Category */}
            <p className="text-sm text-gray-600 font-medium mb-3 sm:mb-4">{t("categorySection.chooseServiceType")}</p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2">
              {CATEGORIES.map(cat => (
                <div key={cat.id}
                  onClick={() => handleCategory(cat.id)}
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 py-3 sm:py-5 px-1 sm:px-2 rounded-xl border cursor-pointer transition-all
                    ${selectedCategory === cat.id ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                  <span className="text-2xl sm:text-3xl">{cat.emoji}</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">{t(cat.label)}</span>
                </div>
              ))}
            </div>

            {/* Items */}
            {selectedCategory && (
              <>
                <hr className="border-amber-100 my-4 sm:my-5" />
                <p className="text-sm text-gray-600 font-medium mb-3">{t("itemsSection.selectItemPrompt")}</p>
                <p className="text-base font-bold text-gray-700 mb-3">{groupLabel}</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {items.map(item => {
                    const g = garments[item.id];
                    const expanded = expandedItem === item.id;
                    return (
                      <div key={item.id}
                        className={`rounded-xl border overflow-hidden transition-all cursor-pointer
                          ${expanded ? "border-[#b8973a] border-2 bg-amber-50" : g ? "border-[#b8973a] bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3"
                          onClick={() => setExpandedItem(expanded ? null : item.id)}>
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-lg sm:text-xl flex-shrink-0">{item.emoji}</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-800 truncate">{t(item.label)}</span>
                          </div>
                          {g && <span className="text-xs font-bold text-[#b8973a] flex-shrink-0 ml-1">✓{g.qty}</span>}
                        </div>
                        {expanded && (
                          <div className="border-t border-amber-100 px-3 sm:px-4 py-3">
                            <p className="text-xs text-gray-400 mb-2">{t("itemsSection.chooseServicePrompt")}</p>
                            <div className="flex flex-wrap gap-2">
                              {SERVICES.map(svc => (
                                <button key={svc.id}
                                  onClick={e => { e.stopPropagation(); handleServiceSelect(item, svc); }}
                                  className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer
                                    ${g?.serviceId === svc.id ? "bg-[#b8973a] text-white border-none" : "border border-gray-300 text-gray-600 bg-white hover:bg-gray-50"}`}>
                                  {t(svc.label)}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* ── ADD-ONS ── */}
            {hasAnyService && (
              <>
                <hr className="border-amber-100 my-4 sm:my-5" />

                {/* Oud */}
                <p className="text-sm font-semibold text-gray-800 mb-3">{t("addOns.oudQuestion")}</p>
                <div className="flex gap-3 mb-5">
                  <button onClick={() => setOudAnswer("yes")}
                    className={`flex-1 py-2.5 sm:py-3 rounded-xl border font-semibold text-sm cursor-pointer transition-all
                      ${oudAnswer === "yes" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>{t("addOns.yes")}</button>
                  <button onClick={() => { setOudAnswer("no"); setOudType(null); }}
                    className={`flex-1 py-2.5 sm:py-3 rounded-xl border font-semibold text-sm cursor-pointer transition-all
                      ${oudAnswer === "no" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>{t("addOns.no")}</button>
                </div>

                {oudAnswer === "yes" && (
                  <>
                    <p className="text-sm font-semibold text-gray-700 mb-3">{t("addOns.chooseOudType")}</p>
                    <div className="flex flex-col sm:flex-row gap-3 mb-5">
                      {OUD_TYPES.map(o => (
                        <div key={o.id} onClick={() => setOudType(o.id)}
                          className={`flex-1 rounded-xl border overflow-hidden cursor-pointer text-center transition-all
                            ${oudType === o.id ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                          <div className="w-full h-28 sm:h-36 bg-amber-50 overflow-hidden">
                            <img src={o.image} alt={t(o.label)} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-3">
                            <p className="font-bold text-sm mb-1">{t(o.label)}</p>
                            <p className="text-xs text-gray-400">{t(o.desc)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Perfume */}
                <p className="text-sm font-semibold text-gray-800 mb-3">{t("addOns.perfumeQuestion")}</p>
                <div className="flex gap-3 mb-5">
                  <button onClick={() => setPerfumeAnswer("yes")}
                    className={`flex-1 py-2.5 sm:py-3 rounded-xl border font-semibold text-sm cursor-pointer transition-all
                      ${perfumeAnswer === "yes" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>{t("addOns.yes")}</button>
                  <button onClick={() => setPerfumeAnswer("no")}
                    className={`flex-1 py-2.5 sm:py-3 rounded-xl border font-semibold text-sm cursor-pointer transition-all
                      ${perfumeAnswer === "no" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>{t("addOns.no")}</button>
                </div>

                {/* Packaging */}
                <p className="text-sm font-semibold text-gray-800 mb-1">{t("addOns.packagingQuestion")}</p>
                <p className="text-xs text-gray-400 mb-4">{t("addOns.packagingSubtext")}</p>

                {garmentList.map(([itemId, g]) => {
                  const pkg = packaging[itemId];
                  return (
                    <div key={itemId} className="border border-gray-200 rounded-xl p-3 sm:p-4 mb-3">
                      <div className="flex justify-between mb-3 gap-2">
                        <span className="text-sm font-bold text-gray-800 truncate">{t(g.label)} #1</span>
                        <span className="text-xs text-gray-400 flex-shrink-0">{t("addOns.selectPackaging")}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                        {PACKAGING_OPTIONS.map(opt => (
                          <div key={opt.id} onClick={() => setPackagingFor(itemId, opt.id, null)}
                            className={`rounded-xl border p-3 cursor-pointer transition-all
                              ${pkg?.optionId === opt.id ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                            <p className="font-bold text-sm mb-1">{t(opt.label)}</p>
                            {opt.colors && (
                              <div className="flex gap-1 flex-wrap mb-2">
                                {opt.colors.map(c => (
                                  <span key={c}
                                    onClick={e => { e.stopPropagation(); setPackagingFor(itemId, opt.id, c); }}
                                    className={`px-2 py-0.5 rounded-full text-xs cursor-pointer border transition-all
                                      ${pkg?.optionId === opt.id && pkg?.colorChoice === c ? "border-[#b8973a] border-2 bg-amber-50 font-semibold" : "border-gray-300"}`}>
                                    {t(`colors.${c}`)}
                                  </span>
                                ))}
                              </div>
                            )}
                            <p className="text-xs text-gray-400">{t(opt.sub)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Gift */}
                <p className="text-sm font-semibold text-gray-800 mb-3">{t("addOns.giftQuestion")}</p>
                <div className="flex gap-3 mb-5">
                  <div onClick={() => setGiftAnswer("yes")}
                    className={`flex-1 flex flex-col items-center gap-2 py-4 sm:py-5 px-2 sm:px-3 rounded-xl border cursor-pointer transition-all text-center
                      ${giftAnswer === "yes" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                    <span className="text-3xl sm:text-4xl">🎁</span>
                    <span className="font-bold text-sm">{t("addOns.giftYesTitle")}</span>
                    <span className="text-xs text-gray-400 hidden sm:block">{t("addOns.giftYesSub")}</span>
                  </div>
                  <div onClick={() => setGiftAnswer("no")}
                    className={`flex-1 flex flex-col items-center gap-2 py-4 sm:py-5 px-2 sm:px-3 rounded-xl border cursor-pointer transition-all text-center
                      ${giftAnswer === "no" ? "border-[#b8973a] border-2 bg-amber-50" : "border-gray-200 bg-white hover:bg-gray-50"}`}>
                    <span className="text-3xl sm:text-4xl">📦</span>
                    <span className="font-bold text-sm">{t("addOns.giftNoTitle")}</span>
                    <span className="text-xs text-gray-400 hidden sm:block">{t("addOns.giftNoSub")}</span>
                  </div>
                </div>

                {giftAnswer === "yes" && (
                  <>
                    <div className="mb-4">
                      <p className="text-xs text-red-500 mb-1">{t("addOns.friendNameLabel")}</p>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b8973a]"
                        placeholder={t("addOns.friendNamePlaceholder")} value={friendName} onChange={e => setFriendName(e.target.value)} />
                      {!friendName && <p className="text-xs text-red-500 mt-1">{t("addOns.requiredField")}</p>}
                    </div>
                    <div className="border-t border-amber-100 pt-4">
                      <p className="text-sm font-bold mb-3">{t("addOns.cardQuestion")}</p>
                      <p className="text-xs text-gray-600 mb-1">{t("addOns.fromLabel")} <span className="text-red-500">*</span></p>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b8973a] mb-1"
                        placeholder={t("addOns.fromPlaceholder")} value={cardFrom} onChange={e => setCardFrom(e.target.value)} />
                      {!cardFrom && <p className="text-xs text-red-500 mb-3">{t("addOns.requiredField")}</p>}
                      <p className="text-xs text-gray-600 mb-1 mt-3">{t("addOns.toLabel")}</p>
                      <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b8973a]"
                        placeholder={t("addOns.toPlaceholder")} value={cardTo} onChange={e => setCardTo(e.target.value)} />
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Footer note */}
          <div className="text-center text-gray-300 text-xs py-3 sm:py-4 px-4 flex-shrink-0">
            {t("footerNote")}
          </div>
        </div>

        {/* ── ORDER SUMMARY ── */}
        <div className="w-full md:w-72 bg-white rounded-xl shadow-xl p-4 sm:p-5 flex-shrink-0 md:sticky md:top-8 max-h-[70vh] md:max-h-[85vh] flex flex-col">
          <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-gray-800 mb-4">
            <span>🗒️</span> {t("orderSummary.heading")}
          </div>

          {/* After gift answer → show only Final Price + Book Now */}
          {hasAnyService && giftAnswer == "yes" ? (
            <>
              {/* Service Type row */}
              <div className="flex justify-between items-center text-xs text-gray-500 border-b border-amber-100 pb-3 mb-3">
                <span>{t("orderSummary.serviceType")}</span>
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  {selectedCategory ? CATEGORIES.find(c => c.id === selectedCategory)?.emoji : ""}
                  {" "}{selectedCategory ? t(CATEGORIES.find(c => c.id === selectedCategory)?.label) : "—"}
                  {selectedCategory && (
                    <span onClick={resetAll} className="text-red-500 cursor-pointer font-bold text-sm ml-1">×</span>
                  )}
                </span>
              </div>

              {/* Garments — SCROLLABLE */}
              <div className="overflow-y-auto flex-1 pr-1  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {garmentList.length > 0 && (
                  <>
                    <p className="text-xs font-bold text-gray-700 mb-2">{t("orderSummary.garments")}</p>
                    {garmentList.map(([itemId, g]) => (
                      <div key={itemId} className="border-b border-amber-100 pb-3 mb-3">
                        <div className="flex justify-between items-center text-xs font-semibold text-gray-800 mb-2">
                          <span>{g.emoji} {t(g.label)}</span>
                          <span onClick={() => removeGarment(itemId)} className="text-red-500 cursor-pointer font-bold text-sm">×</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateQty(itemId, -1)}
                              className="w-6 h-6 border border-gray-300 rounded-md bg-white text-gray-600 text-base font-bold flex items-center justify-center cursor-pointer hover:bg-gray-50">−</button>
                            <span className="text-sm font-semibold">{g.qty}</span>
                            <button onClick={() => updateQty(itemId, 1)}
                              className="w-6 h-6 border border-gray-300 rounded-md bg-white text-gray-600 text-base font-bold flex items-center justify-center cursor-pointer hover:bg-gray-50">+</button>
                          </div>
                          <span className="text-xs font-bold text-[#b8973a]">{g.price * g.qty} QAR</span>
                        </div>
                      </div>
                    ))}

                    {oudAnswer === "yes" && oudType && (
                      <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                        <span>{t("orderSummary.incense")}</span>
                        <span className="text-[#b8973a] font-bold">
                          +{oudPrice} QAR
                          <span onClick={() => { setOudAnswer("no"); setOudType(null); }} className="text-red-500 cursor-pointer font-bold ml-1">×</span>
                        </span>
                      </div>
                    )}

                    <div className="border-t border-amber-100 pt-3 mt-1 mb-3">
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span>{t("orderSummary.packaging")}</span>
                        <span className="text-[#b8973a]">+{packagingPrice} QAR</span>
                      </div>
                      {Object.entries(packaging).map(([iid, p]) => {
                        const opt = PACKAGING_OPTIONS.find(o => o.id === p.optionId);
                        const gm = garments[iid];
                        return opt && gm ? (
                          <div key={iid} className="flex justify-between text-xs text-gray-400">
                            <span>{t(opt.label)} × {gm.qty}</span>
                            <span>+{opt.price * gm.qty} QAR</span>
                          </div>
                        ) : null;
                      })}
                    </div>

                    {giftAnswer === "yes" && (
                      <div className="text-xs text-gray-600 mb-2">
                        {friendName && (
                          <div>
                            <p className="font-semibold">{t("orderSummary.sendToFriend")}</p>
                            <p>{t("orderSummary.friendsName")} {friendName}</p>
                          </div>
                        )}
                        {cardFrom && <p>{t("orderSummary.from")} {cardFrom}</p>}
                        {cardTo && <p>{t("orderSummary.to")} {cardTo}</p>}
                      </div>
                    )}

                    <div className="flex gap-2 my-3">
                      <input className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#b8973a]"
                        placeholder={t("orderSummary.couponPlaceholder")} value={coupon} onChange={e => setCoupon(e.target.value)} />
                      <button className="bg-[#b8973a] text-white text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer hover:bg-[#a0822f]">
                        {t("orderSummary.applyCoupon")}
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Final Price — fixed, not scrolled */}
              <div className="flex justify-between font-bold text-base text-gray-800">
                <span>{t("orderSummary.finalPrice")}</span>
                <span className="text-[#b8973a]">{totalPrice} QAR</span>
              </div>

              {garmentList.length > 0 && (
                <button className="w-full bg-[#b8973a] text-white font-bold text-sm py-3 rounded-xl mt-4 cursor-pointer hover:bg-[#a0822f] tracking-wide">
                  {t("orderSummary.bookNow")}
                </button>
              )}
            </>
          ) : (
            <>
              {/* Service Type row */}
              <div className="flex justify-between items-center text-xs text-gray-500 border-b border-amber-100 pb-3 mb-3">
                <span>{t("orderSummary.serviceType")}</span>
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  {selectedCategory ? CATEGORIES.find(c => c.id === selectedCategory)?.emoji : ""}
                  {" "}{selectedCategory ? t(CATEGORIES.find(c => c.id === selectedCategory)?.label) : "—"}
                  {selectedCategory && (
                    <span onClick={resetAll} className="text-red-500 cursor-pointer font-bold text-sm ml-1">×</span>
                  )}
                </span>
              </div>

              {/* Garments */}
              <div className="overflow-y-auto flex-1 pr-1 scroll-auto  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {garmentList.length > 0 && (
                  <>
                    <p className="text-xs font-bold text-gray-700 mb-2">{t("orderSummary.garments")}</p>
                    {garmentList.map(([itemId, g]) => (
                      <div key={itemId} className="border-b border-amber-100 pb-3 mb-3">
                        <div className="flex justify-between items-center text-xs font-semibold text-gray-800 mb-2">
                          <span>{g.emoji} {t(g.label)}</span>
                          <span onClick={() => removeGarment(itemId)} className="text-red-500 cursor-pointer font-bold text-sm">×</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateQty(itemId, -1)}
                              className="w-6 h-6 border border-gray-300 rounded-md bg-white text-gray-600 text-base font-bold flex items-center justify-center cursor-pointer hover:bg-gray-50">−</button>
                            <span className="text-sm font-semibold">{g.qty}</span>
                            <button onClick={() => updateQty(itemId, 1)}
                              className="w-6 h-6 border border-gray-300 rounded-md bg-white text-gray-600 text-base font-bold flex items-center justify-center cursor-pointer hover:bg-gray-50">+</button>
                          </div>
                          <span className="text-xs font-bold text-[#b8973a]">{g.price * g.qty} QAR</span>
                        </div>
                      </div>
                    ))}

                    {oudAnswer === "yes" && oudType && (
                      <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                        <span>{t("orderSummary.incense")}</span>
                        <span className="text-[#b8973a] font-bold">
                          +{oudPrice} QAR
                          <span onClick={() => { setOudAnswer("no"); setOudType(null); }} className="text-red-500 cursor-pointer font-bold ml-1">×</span>
                        </span>
                      </div>
                    )}

                    <div className="border-t border-amber-100 pt-3 mt-1 mb-3">
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span>{t("orderSummary.packaging")}</span>
                        <span className="text-[#b8973a]">+{packagingPrice} QAR</span>
                      </div>
                      {Object.entries(packaging).map(([iid, p]) => {
                        const opt = PACKAGING_OPTIONS.find(o => o.id === p.optionId);
                        const gm = garments[iid];
                        return opt && gm ? (
                          <div key={iid} className="flex justify-between text-xs text-gray-400">
                            <span>{t(opt.label)} × {gm.qty}</span>
                            <span>+{opt.price * gm.qty} QAR</span>
                          </div>
                        ) : null;
                      })}
                    </div>

                    <div className="flex gap-2 my-3">
                      <input className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-[#b8973a]"
                        placeholder={t("orderSummary.couponPlaceholder")} value={coupon} onChange={e => setCoupon(e.target.value)} />
                      <button className="bg-[#b8973a] text-white text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer hover:bg-[#a0822f]">
                        {t("orderSummary.applyCoupon")}
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-between font-bold text-base text-gray-800">
                <span>{t("orderSummary.finalPrice")}</span>
                <span className="text-[#b8973a]">{totalPrice} QAR</span>
              </div>

              {garmentList.length > 0 && (
                <button className="w-full bg-[#b8973a] text-white font-bold text-sm py-3 rounded-xl mt-4 cursor-pointer hover:bg-[#a0822f] tracking-wide">
                  {t("orderSummary.bookNow")}
                </button>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
}