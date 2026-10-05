/* ============================================================
   VS CODE SCRIPT — مستر عبدو برمجة
   JavaScript Review Interactive Logic
   ============================================================ */

(function () {
    'use strict';

    // ============================================================
    //  DOM REFERENCES
    // ============================================================
    const DOM = {
        sidebar: document.getElementById('sidebar'),
        sidebarToggle: document.getElementById('sidebarToggle'),
        fullscreenToggle: document.getElementById('fullscreenToggle'),
        fileTree: document.getElementById('fileTree'),
        tabsBar: document.getElementById('tabsBar'),
        breadcrumb: document.getElementById('breadcrumb'),
        breadcrumbFile: document.getElementById('breadcrumbFile'),
        editorContent: document.getElementById('editorContent'),
        lineNumber: document.getElementById('lineNumber'),
        vscodeWindow: document.getElementById('vscodeWindow'),
    };

    // ============================================================
    //  STATE
    // ============================================================
    const State = {
        currentSection: 'intro',
        openTabs: ['intro'],
        sectionsMap: {},
    };

    // ============================================================
    //  SECTION METADATA
    // ============================================================
    const SECTION_META = {
        intro:       { name: '00-introduction.js',      icon: 'js' },
        setup:       { name: '01-setup.js',             icon: 'js' },
        where:       { name: '02-where-to-put-js.js',   icon: 'js' },
        console:     { name: '03-console-api.js',       icon: 'js' },
        ecmascript:  { name: '04-ecmascript-es6.js',    icon: 'js' },
        comments:    { name: '05-comments.js',          icon: 'js' },
        variables:   { name: '06-variables.js',         icon: 'js' },
        types:       { name: '07-data-types.js',        icon: 'js' },
        operators:   { name: '08-operators.js',         icon: 'js' },
        conditions:  { name: '09-conditions.js',        icon: 'js' },
        functions:   { name: '10-functions.js',         icon: 'js' },
        arrays:      { name: '11-arrays.js',            icon: 'js' },
        loops:       { name: '12-loops.js',             icon: 'js' },
        problems:    { name: '13-problems.md',          icon: 'md' },
        homework:    { name: '14-homework.md',          icon: 'md' },
    };

    // ============================================================
    //  INIT
    // ============================================================
    function init() {
        cacheSections();
        bindSidebarClicks();
        bindTabsClicks();
        bindSolutionButtons();
        bindSidebarToggle();
        bindFullscreenToggle();
        bindKeyboardShortcuts();
        bindTabClose();
        bindLineNumberTracking();
        openSection('intro');
    }

    // ============================================================
    //  CACHE SECTIONS
    // ============================================================
    function cacheSections() {
        const sections = document.querySelectorAll('.code-section');
        sections.forEach(section => {
            State.sectionsMap[section.id] = section;
        });
    }

    // ============================================================
    //  SIDEBAR CLICKS
    // ============================================================
    function bindSidebarClicks() {
        const fileItems = DOM.fileTree.querySelectorAll('.file-item');
        fileItems.forEach(item => {
            item.addEventListener('click', () => {
                const target = item.getAttribute('data-target');
                openSection(target);
            });
        });
    }

    // ============================================================
    //  TABS CLICKS
    // ============================================================
    function bindTabsClicks() {
        DOM.tabsBar.addEventListener('click', (e) => {
            const tab = e.target.closest('.tab');
            if (!tab) return;

            // If close button clicked
            if (e.target.closest('.close-tab')) {
                closeTab(tab);
                return;
            }

            const target = tab.getAttribute('data-target');
            openSection(target);
        });
    }

    // ============================================================
    //  TAB CLOSE
    // ============================================================
    function bindTabClose() {
        const closeBtns = DOM.tabsBar.querySelectorAll('.close-tab');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const tab = btn.closest('.tab');
                closeTab(tab);
            });
        });
    }

    // ============================================================
    //  OPEN SECTION
    // ============================================================
    function openSection(sectionId) {
        if (!State.sectionsMap[sectionId]) return;

        // Update active section
        Object.values(State.sectionsMap).forEach(section => {
            section.classList.remove('active');
        });
        State.sectionsMap[sectionId].classList.add('active');

        // Update active file in sidebar
        const fileItems = DOM.fileTree.querySelectorAll('.file-item');
        fileItems.forEach(item => {
            const isActive = item.getAttribute('data-target') === sectionId;
            item.classList.toggle('active', isActive);
        });

        // Open tab if not already open
        if (!State.openTabs.includes(sectionId)) {
            State.openTabs.push(sectionId);
        }

        // Update tabs
        renderTabs();
        highlightActiveTab(sectionId);

        // Update breadcrumb
        updateBreadcrumb(sectionId);

        // Update state
        State.currentSection = sectionId;

        // Scroll to top of editor
        DOM.editorContent.scrollTop = 0;
    }

    // ============================================================
    //  RENDER TABS
    // ============================================================
    function renderTabs() {
        DOM.tabsBar.innerHTML = '';

        State.openTabs.forEach(sectionId => {
            const meta = SECTION_META[sectionId];
            if (!meta) return;

            const tab = document.createElement('div');
            tab.className = 'tab';
            tab.setAttribute('data-target', sectionId);

            const iconClass = meta.icon === 'md' ? 'fas fa-file-code file-icon md' : 'fab fa-js-square file-icon js';

            tab.innerHTML = `
                <i class="${iconClass}"></i>
                <span>${meta.name}</span>
                <i class="fas fa-times close-tab"></i>
            `;

            // Close button
            const closeBtn = tab.querySelector('.close-tab');
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeTab(tab);
            });

            DOM.tabsBar.appendChild(tab);
        });

        highlightActiveTab(State.currentSection);
    }

    // ============================================================
    //  HIGHLIGHT ACTIVE TAB
    // ============================================================
    function highlightActiveTab(sectionId) {
        const tabs = DOM.tabsBar.querySelectorAll('.tab');
        tabs.forEach(tab => {
            const isActive = tab.getAttribute('data-target') === sectionId;
            tab.classList.toggle('active', isActive);
        });
    }

    // ============================================================
    //  CLOSE TAB
    // ============================================================
    function closeTab(tab) {
        const target = tab.getAttribute('data-target');

        // Remove from openTabs array
        State.openTabs = State.openTabs.filter(id => id !== target);

        // If closed tab was active, switch to another one
        if (State.currentSection === target) {
            const next = State.openTabs[State.openTabs.length - 1] || 'intro';
            if (State.openTabs.length === 0) {
                State.openTabs.push('intro');
            }
            openSection(State.openTabs[State.openTabs.length - 1]);
        } else {
            renderTabs();
            highlightActiveTab(State.currentSection);
        }
    }

    // ============================================================
    //  UPDATE BREADCRUMB
    // ============================================================
    function updateBreadcrumb(sectionId) {
        const meta = SECTION_META[sectionId];
        if (!meta) return;
        DOM.breadcrumbFile.textContent = meta.name;
    }

    // ============================================================
    //  SOLUTION BUTTONS
    // ============================================================
    function bindSolutionButtons() {
        const buttons = document.querySelectorAll('.btn-solution');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => toggleSolution(btn));
        });
    }

    // ============================================================
    //  TOGGLE SOLUTION
    // ============================================================
    function toggleSolution(button) {
        const problemCard = button.closest('.problem-card');
        if (!problemCard) return;

        const solutionBox = problemCard.querySelector('.solution-box');
        if (!solutionBox) return;

        const isShowing = solutionBox.classList.contains('show');

        if (isShowing) {
            solutionBox.classList.remove('show');
            button.textContent = 'عرض الحل';
            button.classList.remove('showing');
        } else {
            solutionBox.classList.add('show');
            button.textContent = 'إخفاء الحل';
            button.classList.add('showing');
        }
    }

    // ============================================================
    //  SIDEBAR TOGGLE
    // ============================================================
    function bindSidebarToggle() {
        if (!DOM.sidebarToggle) return;

        DOM.sidebarToggle.addEventListener('click', () => {
            DOM.sidebar.classList.toggle('collapsed');
        });
    }

    // ============================================================
    //  FULLSCREEN TOGGLE
    // ============================================================
    function bindFullscreenToggle() {
        if (!DOM.fullscreenToggle) return;

        DOM.fullscreenToggle.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                DOM.vscodeWindow.requestFullscreen().catch(err => {
                    console.warn('Fullscreen error:', err);
                });
            } else {
                document.exitFullscreen().catch(err => {
                    console.warn('Exit fullscreen error:', err);
                });
            }
        });

        // Update icon on fullscreen change
        document.addEventListener('fullscreenchange', () => {
            const icon = DOM.fullscreenToggle.querySelector('i');
            if (document.fullscreenElement) {
                icon.className = 'fas fa-compress';
            } else {
                icon.className = 'fas fa-expand';
            }
        });
    }

    // ============================================================
    //  KEYBOARD SHORTCUTS
    // ============================================================
    function bindKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl + B → Toggle sidebar (like VS Code)
            if (e.ctrlKey && e.key === 'b') {
                e.preventDefault();
                DOM.sidebar.classList.toggle('collapsed');
                return;
            }

            // F11 → Fullscreen (browser default, but we handle gracefully)
            if (e.key === 'F11') {
                return; // let browser handle it
            }

            // Arrow navigation between sections
            if (e.altKey) {
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    navigateSection('prev');
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    navigateSection('next');
                }
            }
        });
    }

    // ============================================================
    //  NAVIGATE SECTION (prev/next)
    // ============================================================
    function navigateSection(direction) {
        const sectionIds = Object.keys(SECTION_META);
        const currentIndex = sectionIds.indexOf(State.currentSection);

        let nextIndex;
        if (direction === 'next') {
            nextIndex = currentIndex + 1;
        } else {
            nextIndex = currentIndex - 1;
        }

        if (nextIndex >= 0 && nextIndex < sectionIds.length) {
            openSection(sectionIds[nextIndex]);
        }
    }

    // ============================================================
    //  LINE NUMBER TRACKING (Status Bar)
    // ============================================================
    function bindLineNumberTracking() {
        if (!DOM.editorContent || !DOM.lineNumber) return;

        DOM.editorContent.addEventListener('scroll', updateLineNumber);
        DOM.editorContent.addEventListener('mousemove', updateLineNumber);
    }

    function updateLineNumber() {
        const scrollTop = DOM.editorContent.scrollTop;
        const lineHeight = 28; // approximate
        const line = Math.floor(scrollTop / lineHeight) + 1;
        DOM.lineNumber.textContent = line;
    }

    // ============================================================
    //  SMOOTH SCROLL TO TOP ON SECTION CHANGE
    // ============================================================
    function scrollEditorToTop() {
        DOM.editorContent.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // ============================================================
    //  HANDLE HASH NAVIGATION (optional)
    // ============================================================
    function handleHashChange() {
        const hash = window.location.hash.replace('#', '');
        if (hash && State.sectionsMap[hash]) {
            openSection(hash);
        }
    }

    // ============================================================
    //  EXPORT GLOBAL FUNCTIONS
    //  (for inline onclick attributes if needed)
    // ============================================================
    window.toggleSolution = toggleSolution;
    window.openSection = openSection;

    // ============================================================
    //  DOM READY
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ============================================================
    //  HANDLE WINDOW RESIZE (for responsive sidebar)
    // ============================================================
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Auto-collapse sidebar on mobile
            if (window.innerWidth < 768) {
                DOM.sidebar.classList.add('collapsed');
            }
        }, 150);
    });

    // Auto-collapse sidebar on initial load if mobile
    if (window.innerWidth < 768) {
        DOM.sidebar.classList.add('collapsed');
    }

})();