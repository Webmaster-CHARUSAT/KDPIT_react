import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ----- Menu Structure -----
const menuStructure = {
  academics: {
    label: "Academics",
    path: "/#academics",
    submenu: {
      practicalList: {
        label: "Practical List",
        path: "drive?folderId=11324AezL2lsgh08r2FYHOAKPl8TJTAQ6&heading=Practical%20List",
        external: true,
      },
      courseModule: {
        label: "Course Module",
        path: "/#course-module",
        submenu: {
          semester4: { label: "Semester 4", path: "/#semester-4" },
          semester6: { label: "Semester 6", path: "/#semester-6" },
        },
      },
      syllabus: {
        label: "Syllabus",
        path: "/drive?folderId=115HPgIpmlYlx29mFq3Bk6RyooQCljoyl&heading=SYLLABUS",
        external: true,
      },
    },
  },
  labEquipments: {
    label: "Lab Equipments",
    path: "https://charusat.edu.in/cspit/it/assets/files/it_equipments.pdf",
    external: true,
  },
  studentCorner: {
    label: "Student Corner",
    path: "https://drive.google.com/file/d/1R43bm9OBMy74JAz8SMx_-T4RMSyDhD0R/view?usp=drive_link",
    external: true,
    submenu: {
      academicCalendar: {
        label: "Academic Calendar",
        path: "https://drive.google.com/file/d/1R43bm9OBMy74JAz8SMx_-T4RMSyDhD0R/view?usp=drive_link",
      },
      btechBooklet: {
        label: "B.Tech Booklet",
        path: "/#btech-booklet",
        submenu: {
          secondYear: {
            label: "Second Year",
            path: "https://drive.google.com/file/d/1JoYmdOtqZLC7TGfWJUeRLWKY_XDE-WCr/view",
            external: true,
          },
          thirdYear: {
            label: "Third Year",
            path: "https://drive.google.com/file/d/14Mn0s37G40oMda8drK2aD8fkPXgmJiae/view",
            external: true,
          },
          fourthYear: {
            label: "Fourth Year",
            path: "https://drive.google.com/file/d/1-IS3INsaHgCNaVJ_kUuwGMn9LcRRGvKb/view",
            external: true,
          },
        },
      },
      eGovernance: {
        label: "E-Governance",
        path: "https://charusat.edu.in:912/eGovernance/",
        external: true,
      },
      examResult: {
        label: "Exam Result",
        path: "https://charusat.edu.in:912/UniExamResult/",
        external: true,
      },
      studentAchievements: {
        label: "Student Achievements",
        path: "/#achievements",
      },
      practicleList: {
        label: "Practicle List",
        path: "https://drive.google.com/drive/folders/1r8M9TINi3B19A9FJ5BUPmqBa3EgdfUZ9",
        external: true,
      },
      oldQuestionPaper: {
        label: "Old Question Paper",
        path: "drive?folderId=1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW&heading=Old%20Question%20Paper",
        external: true,
      },
      eMagazine: {
        label: "E-Magazine",
        path: "/#e-magazine",
        submenu: {
          eMagazine2025: {
            label: "E-Magazine 2025",
            path: "https://charusat.edu.in/cspit/it/e-magazine/2k25/",
            external: true,
          },
          eMagazine2024: {
            label: "E-Magazine 2024",
            path: "https://charusat.edu.in/cspit/it/e-magazine/2k24/",
            external: true,
          },
          eMagazine2023: {
            label: "E-Magazine 2023",
            path: "https://charusat.edu.in/cspit/it/e-magazine/2k23/",
            external: true,
          },
          eMagazine2022: {
            label: "E-Magazine 2022",
            path: "https://charusat.edu.in/cspit/it/e-magazine/2k22/",
            external: true,
          },
        },
      },
      researchLabs: {
        label: "Research Labs",
        path: "https://charusat.edu.in/cspit/it/lab.html",
        external: true,
      },
    },
  },
  admission: {
    label: "Admission",
    path: "https://admission.charusat.ac.in/",
    external: true,
  },
  brochure: {
    label: "Brochure",
    path: "https://drive.google.com/file/d/1mjxkcuaVCC1i7KVPe_dcgIvu05bTDtz3/view?usp=drive_link",
    external: true,
  },
  contactUs: { label: "Contact Us", path: "/#contact" },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverPath, setHoverPath] = useState([]);
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const hoverTimeout = useRef(null);

  // Flatten menu for search
  const flattenMenuForSearch = (menu, path = []) => {
    let items = [];
    Object.entries(menu).forEach(([key, item]) => {
      items.push({ ...item, fullPath: [...path, key] });
      if (item.submenu) {
        items = [
          ...items,
          ...flattenMenuForSearch(item.submenu, [...path, key]),
        ];
      }
    });
    return items;
  };
  const allMenuItems = flattenMenuForSearch(menuStructure);
  const searchResults = allMenuItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation
  const handleNavigation = (path, external = false) => {
    setMobileMenuOpen(false);
    setShowSearch(false);
    setHoverPath([]);
    if (external) {
      window.open(path, "_blank", "noopener noreferrer");
    } else if (path.startsWith("/#")) {
      const el = document.getElementById(path.substring(2));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = path;
    }
  };

  // Hover helpers
  const isPathActive = (path) => path.every((k, i) => hoverPath[i] === k);
  const handleMouseEnter = (path) => {
    clearTimeout(hoverTimeout.current);
    setHoverPath(path);
  };
  const handleMouseLeave = (path) => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setHoverPath(path), 150);
  };

  // Desktop submenu (recursive)
  const renderDesktopSubmenu = (submenu, parentPath = [], level = 1) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`absolute ${level === 1 ? "left-0 top-full" : "left-full top-0"} 
        min-w-[240px] rounded-xl backdrop-blur-lg border border-white/20 
        bg-white/90 shadow-2xl z-50`}
    >
      {Object.entries(submenu).map(([key, item]) => {
        const currentPath = [...parentPath, key];
        const active = isPathActive(currentPath);
        return (
          <div
            key={key}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(currentPath)}
            onMouseLeave={() => handleMouseLeave(parentPath)}
          >
            {item.submenu ? (
              <>
                <div className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/80 cursor-pointer relative">
                  <span className="text-sm font-medium">{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                  <span className="absolute left-0 top-0 h-full w-1 bg-indigo-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
                </div>
                {active &&
                  renderDesktopSubmenu(item.submenu, currentPath, level + 1)}
              </>
            ) : (
              <a
                href={item.path}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className="w-full flex items-center px-4 py-3 text-gray-700 hover:text-indigo-600 relative"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <span className="absolute left-0 top-0 h-full w-1 bg-indigo-500 scale-y-0 hover:scale-y-100 transition-transform origin-top"></span>
              </a>
            )}
          </div>
        );
      })}
    </motion.div>
  );

  // Mobile submenu toggle
  const toggleMobileMenu = (menuPath) => {
    const pathString = menuPath.join(".");
    setOpenMobileMenus((prev) => ({
      ...prev,
      [pathString]: !prev[pathString],
    }));
  };

  // Mobile submenu render
  const renderMobileSubmenu = (submenu, parentPath = [], level = 0) =>
    Object.entries(submenu).map(([key, item]) => {
      const currentPath = [...parentPath, key];
      const pathString = currentPath.join(".");
      const isOpen = openMobileMenus[pathString];
      return (
        <div
          key={key}
          className={`${level > 0 ? "ml-4 border-l border-gray-200 pl-4" : ""}`}
        >
          {item.submenu ? (
            <>
              <button
                onClick={() => toggleMobileMenu(currentPath)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
              >
                <span
                  className={`${level === 0 ? "font-medium" : "font-normal"} text-gray-700`}
                >
                  {item.label}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="py-2">
                      {renderMobileSubmenu(
                        item.submenu,
                        currentPath,
                        level + 1,
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <button
              onClick={() => handleNavigation(item.path, item.external)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <span
                className={`${level === 0 ? "font-medium" : "font-normal"}`}
              >
                {item.label}
              </span>
            </button>
          )}
        </div>
      );
    });
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <motion.img
                src="/images/logo.webp"
                alt="Logo"
                className="h-10 lg:h-12"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {Object.entries(menuStructure).map(([key, item]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter([key])}
                  onMouseLeave={() => handleMouseLeave([])}
                >
                  {item.submenu ? (
                    <>
                      <button
                        className={`flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                          scrolled
                            ? "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                            : "text-white hover:text-indigo-300 hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`ml-2 w-3 h-3 transition-transform ${
                            isPathActive([key]) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isPathActive([key]) &&
                        renderDesktopSubmenu(item.submenu, [key])}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path, item.external)}
                      className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                        scrolled
                          ? "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                          : "text-white hover:text-indigo-300 hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              {/* Desktop Search */}
              <div className="relative ml-6" ref={searchRef}>
                <div
                  className={`flex items-center rounded-full px-4 py-2 transition-all duration-200 ${
                    scrolled
                      ? "bg-gray-200 text-gray-700"
                      : "bg-white/20 text-white backdrop-blur-sm"
                  }`}
                >
                  <Search className="w-4 h-4 mr-3 opacity-70" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-transparent focus:outline-none text-sm w-48 placeholder-current placeholder-opacity-70"
                    onFocus={() => setShowSearch(true)}
                  />
                </div>
                {showSearch && searchQuery && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-12 left-0 right-0 bg-white shadow-xl rounded-lg border border-gray-100 overflow-y-auto z-50 max-h-64"
                  >
                    {searchResults.map((item, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleNavigation(item.path, item.external)
                        }
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-indigo-600 transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-xl border-t border-gray-100 overflow-hidden"
            >
              <div className="max-h-[80vh] overflow-y-auto">
                {/* Mobile Search */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                    <Search className="w-4 h-4 mr-3 text-gray-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="bg-transparent focus:outline-none text-sm w-full text-gray-700 placeholder-gray-500"
                      onFocus={() => setShowSearch(true)}
                    />
                  </div>
                  {showSearch && searchQuery && searchResults.length > 0 && (
                    <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-md overflow-y-auto max-h-64">
                      {searchResults.map((item, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            handleNavigation(item.path, item.external)
                          }
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-indigo-600 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Menu Items */}
                <div className="py-2">
                  {Object.entries(menuStructure).map(([key, item]) => (
                    <div key={key}>
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => toggleMobileMenu([key])}
                            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-700">
                              {item.label}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-gray-400 transition-transform ${
                                openMobileMenus[key] ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {openMobileMenus[key] && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-gray-50"
                              >
                                <div className="py-2">
                                  {renderMobileSubmenu(item.submenu, [key], 1)}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <button
                          onClick={() =>
                            handleNavigation(item.path, item.external)
                          }
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                          <span className="font-medium">{item.label}</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      {/* <div className="h-16"></div> */}
    </>
  );
};

export default Navbar;
