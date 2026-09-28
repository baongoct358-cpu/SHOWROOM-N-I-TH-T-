/**
 * CASTLERY DESIGN SYSTEM - SHOWROOM NỘI THẤT MAY ĐO (castlery.com/us style)
 * Core interactive logic:
 * 1. Product Catalog with Multi-Color Fabric Swatches & Dual-Image Hover
 * 2. Quick View Modal with Full Product Specs & Swatch Picker
 * 3. Interactive "Shop The Look" Hotspots in Real Customer Homes
 * 4. Free Fabric & Wood Swatches Ordering Flow
 * 5. Quotation Drawer / Cart List Counter
 * 6. Responsive Mobile Drawer & Sticky Header Transitions
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. ANNOUNCEMENT BAR & STICKY HEADER
  // =========================================================================
  const announcementBar = document.getElementById('announcement-bar');
  const closeAnnouncementBtn = document.getElementById('close-announcement-btn');
  const mainHeader = document.getElementById('main-header');

  if (closeAnnouncementBtn && announcementBar) {
    closeAnnouncementBtn.addEventListener('click', () => {
      announcementBar.style.display = 'none';
    });
  }

  const handleHeaderScroll = () => {
    if (!mainHeader) return;
    if (window.scrollY > 30) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Mobile Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('translate-x-full');
    mobileBackdrop.classList.remove('hidden');
    setTimeout(() => mobileBackdrop.classList.remove('opacity-0'), 10);
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('translate-x-full');
    mobileBackdrop.classList.add('opacity-0');
    setTimeout(() => {
      mobileBackdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }, 250);
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // =========================================================================
  // 2. CASTLERY PRODUCT CATALOG (BESTSELLERS & FURNITURE PIECES)
  // =========================================================================
  const productsData = [
    {
      id: 'c1',
      collection: 'JONATHAN COLLECTION',
      name: 'Sofa Văng Jonathan 3 Chỗ Bọc Nỉ Tuyết',
      category: 'living',
      price: 13800000,
      priceOriginal: 18500000,
      dimensions: 'D215 x S90 x C82 cm',
      materials: 'Vải nỉ tuyết kháng bẩn • Đệm mút D40 êm ái • Khung gỗ sồi chuẩn E1',
      badge: 'Bestseller',
      rating: 4.9,
      reviewsCount: 52,
      swatches: [
        {
          name: 'Be cát ấm (Warm Sand)',
          hex: '#D7D0C5',
          imgPrimary: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80'
        },
        {
          name: 'Ghi xám khói (Smoke Gray)',
          hex: '#8C8882',
          imgPrimary: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=700&q=80'
        },
        {
          name: 'Cam đất nung (Terracotta)',
          hex: '#A85A42',
          imgPrimary: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80'
        }
      ]
    },
    {
      id: 'c2',
      collection: 'SEB COLLECTION',
      name: 'Bàn Ăn Mở Rộng Seb 1.6m - 2.1m Gỗ Tự Nhiên',
      category: 'dining',
      price: 11200000,
      priceOriginal: 15000000,
      dimensions: 'D160 - 210 x R90 x C75 cm',
      materials: 'Gỗ Sồi phủ Veneer An Cường • Ray trượt giảm chấn Hafele • Chân bo tròn',
      badge: 'Gấp Gọn Tiện Ích',
      rating: 4.8,
      reviewsCount: 38,
      swatches: [
        {
          name: 'Sồi tự nhiên (Natural Oak)',
          hex: '#C8A882',
          imgPrimary: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=700&q=80'
        },
        {
          name: 'Óc chó trầm (Warm Walnut)',
          hex: '#5C4033',
          imgPrimary: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=700&q=80'
        }
      ]
    },
    {
      id: 'c3',
      collection: 'DAWSON COLLECTION',
      name: 'Giường Ngủ Bọc Nệm Dawson 1m8 x 2m Tối Giản',
      category: 'bedroom',
      price: 12500000,
      priceOriginal: 16800000,
      dimensions: 'R192 x D218 x C105 cm',
      materials: 'Đầu giường bọc nỉ tuyết • Khung giát phản MDF lõi xanh chuẩn E1',
      badge: 'Chuẩn E1 An Toàn',
      rating: 5.0,
      reviewsCount: 44,
      swatches: [
        {
          name: 'Be kem tối giản (Cream Boucle)',
          hex: '#ECE7DE',
          imgPrimary: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=700&q=80'
        },
        {
          name: 'Xanh olive dịu (Muted Olive)',
          hex: '#5B6E60',
          imgPrimary: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80'
        }
      ]
    },
    {
      id: 'c4',
      collection: 'ADAMS COLLECTION',
      name: 'Kệ Tivi Giấu Dây Adams 2m Kèm Vách Lam Sóng',
      category: 'living',
      price: 5800000,
      priceOriginal: 8200000,
      dimensions: 'D200 x S38 x C42 cm',
      materials: 'MDF lõi xanh Melamine An Cường • Khoang luồn dây âm • Ray trượt giảm chấn',
      badge: 'Hot Seller',
      rating: 4.9,
      reviewsCount: 31,
      swatches: [
        {
          name: 'Óc chó Bắc Âu (Walnut)',
          hex: '#5C4033',
          imgPrimary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80'
        },
        {
          name: 'Trắng sứ & Sồi sáng (Oak & White)',
          hex: '#EBE5D8',
          imgPrimary: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80'
        }
      ]
    },
    {
      id: 'c5',
      collection: 'OWEN COLLECTION',
      name: 'Sofa Góc Chữ L Owen Da Microfiber Kháng Khuẩn',
      category: 'living',
      price: 24500000,
      priceOriginal: 32000000,
      dimensions: 'D280 x S170 x C82 cm',
      materials: 'Da Microfiber chống cào xước thú cưng • Đệm mút D40 dày dặn • Chân thép sơn tĩnh điện',
      badge: 'Pet-Friendly',
      rating: 4.9,
      reviewsCount: 65,
      swatches: [
        {
          name: 'Ghi xám xi măng (Concrete Gray)',
          hex: '#7A7A78',
          imgPrimary: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80'
        },
        {
          name: 'Nâu bò Saddle (Cognac Leather)',
          hex: '#8C5332',
          imgPrimary: 'https://images.unsplash.com/photo-1580481077197-238479e0a0d9?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80'
        }
      ]
    },
    {
      id: 'c6',
      collection: 'VINCENT COLLECTION',
      name: 'Bàn Trà Lồng Đôi Vincent Mặt Đá Thiêu Kết',
      category: 'living',
      price: 4200000,
      priceOriginal: 5800000,
      dimensions: 'Đường kính 75cm + 55cm',
      materials: 'Mặt đá thiêu kết chống ố chống cháy • Khung thép mạ PVD vàng đồng',
      badge: 'Chống Ố 100%',
      rating: 4.8,
      reviewsCount: 29,
      swatches: [
        {
          name: 'Đá trắng vân mây (Statuario White)',
          hex: '#F0EFEA',
          imgPrimary: 'https://images.unsplash.com/photo-1533779283484-8da497b173c4?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80'
        },
        {
          name: 'Đá xám đá phiến (Nero Slate)',
          hex: '#3A3835',
          imgPrimary: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1533779283484-8da497b173c4?auto=format&fit=crop&w=700&q=80'
        }
      ]
    },
    {
      id: 'c7',
      collection: 'HARLOW COLLECTION',
      name: 'Bàn Làm Việc Chân Sắt Liền Kệ Sách Harlow',
      category: 'office',
      price: 4600000,
      priceOriginal: 6200000,
      dimensions: 'D140 x S60 x C75 cm',
      materials: 'MDF lõi xanh An Cường 25mm • Khung sắt sơn tĩnh điện mờ • Khe luồn dây cáp',
      badge: 'Home Office',
      rating: 4.9,
      reviewsCount: 22,
      swatches: [
        {
          name: 'Đen mờ & Sồi sáng (Matte Black / Oak)',
          hex: '#2B2B2A',
          imgPrimary: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80'
        },
        {
          name: 'Trắng tinh khôi (Pure White)',
          hex: '#F7F6F2',
          imgPrimary: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=700&q=80'
        }
      ]
    },
    {
      id: 'c8',
      collection: 'FULL HOME SETS',
      name: 'Combo Trọn Gói Căn Hộ 2 Phòng Ngủ Castlery Style',
      category: 'sets',
      price: 48500000,
      priceOriginal: 65000000,
      dimensions: 'Dành cho căn hộ 55m² - 75m²',
      materials: 'Full nội thất Phòng Khách + Bàn ăn + 2 Phòng Ngủ • 100% Gỗ An Cường E1',
      badge: 'Tiết Kiệm 16.5 Tr',
      rating: 5.0,
      reviewsCount: 78,
      swatches: [
        {
          name: 'Phối cảnh Scandinavian ấm áp',
          hex: '#D7D0C5',
          imgPrimary: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80',
          imgSecondary: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=700&q=80'
        }
      ]
    }
  ];

  // Render Product Card
  const productGrid = document.getElementById('castlery-product-grid');
  let activeFilterCategory = 'all';

  function renderProductCards(category = 'all') {
    if (!productGrid) return;
    activeFilterCategory = category;

    const filtered = category === 'all' 
      ? productsData 
      : productsData.filter(item => item.category === category);

    productGrid.innerHTML = filtered.map((prod) => {
      const defaultSwatch = prod.swatches[0];
      const savings = prod.priceOriginal - prod.price;

      return `
      <div class="product-card group flex flex-col justify-between rounded-xl bg-white border border-[#EAE6DF] overflow-hidden"
        data-prod-id="${prod.id}">
        
        <!-- Image Box with Dual-Image Swap on Hover -->
        <div class="product-img-wrapper aspect-[4/3] sm:aspect-square relative cursor-pointer"
          onclick="openQuickViewModal('${prod.id}')">
          <img src="${defaultSwatch.imgPrimary}" alt="${prod.name}" loading="lazy"
            class="product-img-primary w-full h-full object-cover">
          <img src="${defaultSwatch.imgSecondary}" alt="${prod.name} góc chụp 2" loading="lazy"
            class="product-img-secondary">
          
          <!-- Badge -->
          <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-stone-800 px-2.5 py-1 rounded shadow-xs tracking-wider uppercase border border-stone-200/60">
            ${prod.badge}
          </div>

          <!-- Quick View Hover Button -->
          <div class="quick-view-btn absolute bottom-3 left-3 right-3 z-10">
            <button type="button" class="w-full py-2.5 rounded-lg bg-stone-900/90 hover:bg-stone-900 text-white text-xs font-semibold backdrop-blur-sm transition-all shadow-md flex items-center justify-center gap-1.5"
              onclick="event.stopPropagation(); openQuickViewModal('${prod.id}')">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              <span>Xem Nhanh &amp; Tùy Biến</span>
            </button>
          </div>
        </div>

        <!-- Product Meta & Swatches -->
        <div class="p-4 sm:p-5 flex flex-col justify-between flex-1">
          <div>
            <!-- Collection Name -->
            <div class="text-[10.5px] font-semibold tracking-widest uppercase text-stone-400 mb-1">
              ${prod.collection}
            </div>

            <!-- Product Title -->
            <h3 class="font-sans text-sm sm:text-base font-semibold text-stone-900 mb-1 group-hover:text-[#A85A42] transition-colors line-clamp-1 cursor-pointer"
              onclick="openQuickViewModal('${prod.id}')">
              ${prod.name}
            </h3>

            <!-- Dimension / Materials summary -->
            <p class="text-xs text-stone-500 font-normal line-clamp-1 mb-3">
              ${prod.dimensions} • ${prod.materials.split('•')[0]}
            </p>

            <!-- Swatches Row -->
            <div class="flex items-center gap-2 mb-3 swatches-container">
              ${prod.swatches.map((sw, idx) => `
                <button type="button" class="swatch-item ${idx === 0 ? 'active' : ''}"
                  style="background-color: ${sw.hex};"
                  title="${sw.name}"
                  data-swatch-idx="${idx}"
                  onclick="selectProductSwatch('${prod.id}', ${idx}, this)">
                </button>
              `).join('')}
              <span class="text-[11px] text-stone-400 swatch-label-display ml-1 line-clamp-1">
                ${defaultSwatch.name.split('(')[0]}
              </span>
            </div>
          </div>

          <!-- Price & Action -->
          <div class="pt-3 border-t border-[#F0ECE5] flex items-baseline justify-between">
            <div class="flex items-baseline gap-2">
              <span class="text-base sm:text-lg font-bold text-stone-900">
                ${prod.price.toLocaleString('vi-VN')} đ
              </span>
              <span class="text-xs text-stone-400 line-through">
                ${prod.priceOriginal.toLocaleString('vi-VN')} đ
              </span>
            </div>
            <span class="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
              Tiết kiệm ${(savings / 1000000).toFixed(1)} tr
            </span>
          </div>

        </div>

      </div>
      `;
    }).join('');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // Switch Swatch Image & Active Ring
  window.selectProductSwatch = function(prodId, swatchIndex, btnElement) {
    const card = btnElement.closest('.product-card');
    if (!card) return;

    const prod = productsData.find(p => p.id === prodId);
    if (!prod || !prod.swatches[swatchIndex]) return;

    const chosen = prod.swatches[swatchIndex];

    // Update active ring on swatches
    card.querySelectorAll('.swatch-item').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    // Update label
    const labelEl = card.querySelector('.swatch-label-display');
    if (labelEl) labelEl.textContent = chosen.name.split('(')[0];

    // Update image
    const imgPri = card.querySelector('.product-img-primary');
    const imgSec = card.querySelector('.product-img-secondary');
    if (imgPri) imgPri.src = chosen.imgPrimary;
    if (imgSec) imgSec.src = chosen.imgSecondary;
  };

  // Bind Room Tabs Filter (Living, Dining, Bedroom, Sets, All)
  const roomFilterBtns = document.querySelectorAll('.room-filter-btn');
  roomFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roomFilterBtns.forEach(b => {
        b.classList.remove('bg-stone-900', 'text-white', 'border-stone-900');
        b.classList.add('bg-white', 'text-stone-700', 'border-stone-200');
      });
      btn.classList.remove('bg-white', 'text-stone-700', 'border-stone-200');
      btn.classList.add('bg-stone-900', 'text-white', 'border-stone-900');

      const cat = btn.getAttribute('data-room-cat') || 'all';
      renderProductCards(cat);
    });
  });

  // Initial Product Render
  renderProductCards('all');

  // =========================================================================
  // 3. QUICK VIEW MODAL
  // =========================================================================
  const quickViewModal = document.getElementById('quick-view-modal');
  const quickViewClose = document.getElementById('quick-view-close');
  const qvImgPrimary = document.getElementById('qv-img-primary');
  const qvBadge = document.getElementById('qv-badge');
  const qvCollection = document.getElementById('qv-collection');
  const qvName = document.getElementById('qv-name');
  const qvRating = document.getElementById('qv-rating');
  const qvPrice = document.getElementById('qv-price');
  const qvPriceOriginal = document.getElementById('qv-price-original');
  const qvDimensions = document.getElementById('qv-dimensions');
  const qvMaterials = document.getElementById('qv-materials');
  const qvSwatchesContainer = document.getElementById('qv-swatches-container');
  const qvSelectedColorName = document.getElementById('qv-selected-color-name');
  const qvRequestQuoteBtn = document.getElementById('qv-request-quote-btn');

  let currentQvProduct = null;

  window.openQuickViewModal = function(prodId) {
    const prod = productsData.find(p => p.id === prodId);
    if (!prod || !quickViewModal) return;

    currentQvProduct = prod;
    const defaultSwatch = prod.swatches[0];

    if (qvImgPrimary) qvImgPrimary.src = defaultSwatch.imgPrimary;
    if (qvBadge) qvBadge.textContent = prod.badge;
    if (qvCollection) qvCollection.textContent = prod.collection;
    if (qvName) qvName.textContent = prod.name;
    if (qvRating) qvRating.textContent = `${prod.rating} ★ (${prod.reviewsCount} đánh giá từ chủ nhà)`;
    if (qvPrice) qvPrice.textContent = prod.price.toLocaleString('vi-VN') + ' đ';
    if (qvPriceOriginal) qvPriceOriginal.textContent = prod.priceOriginal.toLocaleString('vi-VN') + ' đ';
    if (qvDimensions) qvDimensions.textContent = prod.dimensions;
    if (qvMaterials) qvMaterials.textContent = prod.materials;
    if (qvSelectedColorName) qvSelectedColorName.textContent = defaultSwatch.name;

    // Render swatches in modal
    if (qvSwatchesContainer) {
      qvSwatchesContainer.innerHTML = prod.swatches.map((sw, idx) => `
        <button type="button" class="swatch-item ${idx === 0 ? 'active' : ''} !w-6 !h-6"
          style="background-color: ${sw.hex};"
          title="${sw.name}"
          onclick="selectModalSwatch(${idx}, this)">
        </button>
      `).join('');
    }

    quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.selectModalSwatch = function(swatchIndex, btnElement) {
    if (!currentQvProduct || !currentQvProduct.swatches[swatchIndex]) return;
    const sw = currentQvProduct.swatches[swatchIndex];

    if (qvSwatchesContainer) {
      qvSwatchesContainer.querySelectorAll('.swatch-item').forEach(b => b.classList.remove('active'));
      btnElement.classList.add('active');
    }

    if (qvSelectedColorName) qvSelectedColorName.textContent = sw.name;
    if (qvImgPrimary) qvImgPrimary.src = sw.imgPrimary;
  };

  function closeQuickView() {
    if (!quickViewModal) return;
    quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (quickViewClose) quickViewClose.addEventListener('click', closeQuickView);
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }

  if (qvRequestQuoteBtn) {
    qvRequestQuoteBtn.addEventListener('click', () => {
      closeQuickView();
      const quoteModal = document.getElementById('quote-modal');
      const modalProductInput = document.getElementById('modal-product-name');
      if (modalProductInput && currentQvProduct) {
        modalProductInput.value = `${currentQvProduct.name} (${qvSelectedColorName?.textContent || ''})`;
      }
      if (quoteModal) {
        quoteModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // =========================================================================
  // 4. INTERACTIVE LOOKBOOK (SHOP THE LOOK WITH HOTSPOTS)
  // =========================================================================
  const lookbookRooms = {
    vinhomes: {
      title: 'Căn Hộ 2PN Vinhomes Smart City – Phong Cách Mid-Century Warmth',
      bgImg: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
      hotspots: [
        {
          top: '55%',
          left: '38%',
          title: 'Sofa Văng Jonathan 3 Chỗ',
          material: 'Vải nỉ tuyết Be cát • Mút D40',
          price: '13.800.000 đ',
          prodId: 'c1'
        },
        {
          top: '68%',
          left: '60%',
          title: 'Bàn Trà Lồng Đôi Vincent',
          material: 'Mặt đá thiêu kết chống ố',
          price: '4.200.000 đ',
          prodId: 'c6'
        },
        {
          top: '45%',
          left: '82%',
          title: 'Kệ TV Giấu Dây Adams 2m',
          material: 'MDF Lõi Xanh An Cường',
          price: '5.800.000 đ',
          prodId: 'c4'
        }
      ]
    },
    masteri: {
      title: 'Phòng Ăn & Bếp Căn Hộ Masteri West Heights – Gỗ Sồi Ấm Áp',
      bgImg: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
      hotspots: [
        {
          top: '62%',
          left: '48%',
          title: 'Bàn Ăn Mở Rộng Seb 1.6m - 2.1m',
          material: 'Gỗ sồi phủ Veneer An Cường',
          price: '11.200.000 đ',
          prodId: 'c2'
        },
        {
          top: '40%',
          left: '25%',
          title: 'Tủ Bếp Acrylic Noline',
          material: 'Bóng gương chống ẩm chuẩn E1',
          price: '5.200.000 đ/md',
          prodId: 'c8'
        }
      ]
    },
    ecopark: {
      title: 'Phòng Ngủ Master Biệt Thự Ecopark – Sanctuary Yên Bình',
      bgImg: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=80',
      hotspots: [
        {
          top: '58%',
          left: '42%',
          title: 'Giường Ngủ Dawson 1m8 x 2m',
          material: 'Nệm bọc Boucle • MDF Lõi Xanh E1',
          price: '12.500.000 đ',
          prodId: 'c3'
        },
        {
          top: '42%',
          left: '80%',
          title: 'Tủ Áo Cánh Kính Khung Nhôm',
          material: 'Khung nhôm Anodized • Đèn LED',
          price: '16.800.000 đ',
          prodId: 'c8'
        }
      ]
    }
  };

  const lookbookContainer = document.getElementById('lookbook-container');
  const lookbookImg = document.getElementById('lookbook-img');
  const lookbookTitle = document.getElementById('lookbook-title');
  const lookbookTabBtns = document.querySelectorAll('.lookbook-tab-btn');

  function renderLookbookRoom(roomKey = 'vinhomes') {
    const room = lookbookRooms[roomKey] || lookbookRooms.vinhomes;
    if (!lookbookContainer || !lookbookImg) return;

    lookbookImg.src = room.bgImg;
    if (lookbookTitle) lookbookTitle.textContent = room.title;

    // Remove existing hotspots
    lookbookContainer.querySelectorAll('.hotspot-wrapper').forEach(el => el.remove());

    // Inject hotspots
    room.hotspots.forEach((hs) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'hotspot-wrapper';
      wrapper.style.top = hs.top;
      wrapper.style.left = hs.left;

      wrapper.innerHTML = `
        <div class="hotspot-point">
          <div class="hotspot-halo"></div>
          <i data-lucide="plus" class="w-3.5 h-3.5 text-stone-900"></i>
        </div>
        <div class="hotspot-popover">
          <div class="text-[10px] uppercase font-bold tracking-wider text-[#A85A42] mb-0.5">Sản Phẩm Trong Ảnh</div>
          <div class="font-sans text-xs font-bold text-stone-900 mb-0.5">${hs.title}</div>
          <div class="text-[11px] text-stone-500 mb-2">${hs.material}</div>
          <div class="flex items-center justify-between pt-1.5 border-t border-stone-100">
            <span class="text-xs font-bold text-stone-900">${hs.price}</span>
            <button type="button" class="text-[11px] font-semibold text-[#A85A42] hover:underline"
              onclick="openQuickViewModal('${hs.prodId}')">
              Xem mẫu &rarr;
            </button>
          </div>
        </div>
      `;

      const point = wrapper.querySelector('.hotspot-point');
      point.addEventListener('click', (e) => {
        e.stopPropagation();
        // Toggle open
        const isOpen = wrapper.classList.contains('open');
        lookbookContainer.querySelectorAll('.hotspot-wrapper').forEach(w => w.classList.remove('open'));
        if (!isOpen) wrapper.classList.add('open');
      });

      lookbookContainer.appendChild(wrapper);
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // Close hotspots when clicking outside
  document.addEventListener('click', () => {
    if (lookbookContainer) {
      lookbookContainer.querySelectorAll('.hotspot-wrapper').forEach(w => w.classList.remove('open'));
    }
  });

  lookbookTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      lookbookTabBtns.forEach(b => {
        b.classList.remove('bg-stone-900', 'text-white');
        b.classList.add('bg-white', 'text-stone-700');
      });
      btn.classList.remove('bg-white', 'text-stone-700');
      btn.classList.add('bg-stone-900', 'text-white');

      const roomKey = btn.getAttribute('data-room-key') || 'vinhomes';
      renderLookbookRoom(roomKey);
    });
  });

  // Initial Lookbook Render
  renderLookbookRoom('vinhomes');

  // =========================================================================
  // 5. FREE FABRIC & WOOD SWATCHES (HỘP MẪU VẬT LIỆU TẬN NHÀ)
  // =========================================================================
  const swatchCheckboxes = document.querySelectorAll('.free-swatch-checkbox');
  const swatchCountBadge = document.getElementById('swatch-count-badge');
  const freeSwatchForm = document.getElementById('free-swatch-form');

  if (swatchCheckboxes.length > 0) {
    swatchCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const checkedCount = document.querySelectorAll('.free-swatch-checkbox:checked').length;
        if (checkedCount > 3) {
          cb.checked = false;
          showToast('Mỗi gia đình được chọn tối đa 3 mẫu miễn phí gửi tận nhà!', false);
          return;
        }
        if (swatchCountBadge) {
          swatchCountBadge.textContent = `${checkedCount}/3 đã chọn`;
        }
      });
    });
  }

  if (freeSwatchForm) {
    freeSwatchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const checkedBoxes = document.querySelectorAll('.free-swatch-checkbox:checked');
      if (checkedBoxes.length === 0) {
        showToast('Vui lòng tick chọn ít nhất 1 mẫu vải/gỗ bạn muốn xem thử!', false);
        return;
      }
      const name = document.getElementById('swatch-user-name')?.value || 'Quý khách';
      const address = document.getElementById('swatch-user-address')?.value || '';
      showToast(`Chúc mừng ${name}! Xưởng Mộc Tinh Hoa đã tiếp nhận yêu cầu gửi hộp mẫu đến: ${address}. Đơn vị chuyển phát nhanh sẽ giao trong 24h.`);
      freeSwatchForm.reset();
      if (swatchCountBadge) swatchCountBadge.textContent = '0/3 đã chọn';
    });
  }

  // =========================================================================
  // 6. QUOTE MODAL & CONSULTATION FORMS
  // =========================================================================
  const quoteModal = document.getElementById('quote-modal');
  const openQuoteBtns = document.querySelectorAll('.open-quote-modal');
  const quoteModalClose = document.getElementById('quote-modal-close');
  const quoteForm = document.getElementById('quote-form');
  const toastNotification = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg, isSuccess = true) {
    if (!toastNotification) return;
    if (toastMessage) toastMessage.textContent = msg;
    toastNotification.classList.remove('bg-stone-900', 'bg-rose-900');
    toastNotification.classList.add(isSuccess ? 'bg-stone-900' : 'bg-rose-900');
    toastNotification.classList.add('show');
    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4500);
  }

  function openQuoteModal() {
    if (!quoteModal) return;
    quoteModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuoteModal() {
    if (!quoteModal) return;
    quoteModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openQuoteBtns.forEach(btn => btn.addEventListener('click', openQuoteModal));
  if (quoteModalClose) quoteModalClose.addEventListener('click', closeQuoteModal);
  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) closeQuoteModal();
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('modal-phone')?.value || '';
      closeQuoteModal();
      showToast(`Đã gửi bảng dự toán chi tiết vào số ${phone}! Kỹ sư xưởng Mộc Tinh Hoa sẽ liên hệ lại trong 15 phút.`);
      quoteForm.reset();
    });
  }

  // =========================================================================
  // 7. KEYBOARD ACCESSIBILITY (ESC TO CLOSE MODALS)
  // =========================================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      closeQuoteModal();
      closeMobileMenu();
    }
  });

  // Lucide Icons Init
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

});
