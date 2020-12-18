define([], function() {
    /**
     * It is recommended that customers do not edit the values in the vvDefines.js file.                                           
     * Customer configurable fields are found in config.js and described in {@link vvConfig}                                                             .
     *                                                                                                                 
     * This file defines various constant variables for use in the VirtualViewer HTML5 Client.                               
     *                                                                                                                 
     * These constants are not to be used for configuration purposes and should only be modified by Snowbound Software.  
     * @namespace vvDefines 
     * @global
     * @readonly
     */
    vvDefines = {
        productName: "VirtualViewer HTML5",
        productVersion: "5.6",
        cacheBuster: false,
        annColorBlobSize: 15,
        annColorBlobSizeTouch: 40,
        annColorRowSize: 10,
        annMinimizeButtonSize: 14,
        maxNumberOfTabs: 10,
        autoSaveAnnotations: false,
        mostRecentlyViewedListLength: 10,
        autoLayerName: "AutoLayer",
        redactionLayerPrefix: "vvRedaction",
        hideRedactionLayerFromManager: true,
        thumbnailSize: 140,
        ie9DrawDelay: 100,
        minTextAnnDrawSize: 10,
        idmMax: 10000,
        idmDPI: 200,
        daejaDPI: 300,
        defaultBrightnessValue: 0,
        defaultContrastValue: 0,
        defaultGammaValue: 100,
        //default batch size if not set in config
        searchBatchSize: 50,
        searchTimeout: 0,
        bogusImageURL: "resources/blank.gif",
        searchDefaultColor: "rgba(255,78,0,0.2)",
        searchSelectedColor: "rgba(255,255,0,0.2)",
        selectedTextColor: "rgba(0,92,179,0.2)",
        selectTextSpaceDetectionRatio: 0.1272,
        spaceBetweenPages: 20,
        imageCrossOriginAttributeValue: "use-credentials",
        printIE11PageLimit: 25,
        printFirefoxPageLimit: 25,
        maxHtmlHeightMicrosoft: 1500000,
        maxHtmlHeightFirefox: 17000000,
        
        imageRequestThrottle: 20,
        
        picaQuality: 3,
        picaAlpha: true,
        picaUnsharpAmount: 80,
        picaUnsharpRadius: 0.6,
        picaUnsharpThreshold: 2,
        picaCacheTimeout: 2000,
        
        magnifierCloseButtonSize: 20,

        minimumAnnotationDPI: 72,
        annotationTypes: {
            SANN_POSTIT: "Sticky Note",
            SANN_EDIT: "Rubber Stamp",
            SANN_BITMAP: "Bitmap",
            SANN_HIGHLIGHT_RECT: "HighlightRectangle",
            SANN_REDACTION_RECT: "RedactionRect",
            SANN_LINE: "Line",
            SANN_ARROW: "Arrow",
            SANN_FREEHAND: "Freehand",
            SANN_FILLED_RECT: "FilledRectangle",
            SANN_FILLED_ELLIPSE: "FilledEllipse",
            SANN_FILLED_POLYGON: "FilledPolygon",
            SANN_RECTANGLE: "Rectangle",
            SANN_ELLIPSE: "Ellipse",
            SANN_POLYGON: "Polygon",
            SANN_TRANSPARENT_BITMAP: "TransparentBitmap",
            SANN_BUBBLE: "Bubble",
            SANN_CLOUD_EDIT: "Cloud",
            SANN_CUSTOM_STAMP: "CustomStamp",
            SANN_CIRCLE: "Circle"
        },
        mediaType: {
            video:"Video",
            audio:"Audio",
            document:"Document"
        },
        permissionLevels: {
            PERM_HIDDEN: 0,
            PERM_REDACTION: 10,
            PERM_PRINT_WATERMARK: 20,
            PERM_VIEW_WATERMARK: 30,
            PERM_VIEW: 40,
            PERM_PRINT: 50,
            PERM_CREATE: 60,
            PERM_EDIT: 70,
            PERM_DELETE: 80
        },
        dragModes: {
            pan: 0,
            zoom: 1,
            annotate: 2,
            moveAnnotation: 3,
            textAnnotationEdit: 4,
            selectText: 5,
            guides: 6,
            magnifier: 7,
            crop: 8,
            overlay: 9,
            touchZoom: 10
        },
        
        panToolPref: {
            noPanTool: 0,
            panToolWithoutScrollbars: 1,
            panToolWithScrollbars: 2
        },
        
        watermarkTag: {
            USERNAME: "@@username@@",
            TOTALPAGES: "@@totalPages@@",
            PAGENUMBER: "@@pageNumber@@",
            PRINTTIME: "@@printTime@@",
            SERVERTIME: "@@serverTime@@",
            DOCUMENTNAME: "@@documentName@@"
        },

        /**
         * @enum {number} Define the tabs controlling the thumbnail pane.
         * @memberof vvDefines
         */
        thumbnailTabs: {
            /** The tab showing page thumbnails. */
            page: 0,
            /** The tab showing document thumbnails. */
            document: 1,
            /** The UI for searching in a document or annotations. */
            search: 2,
            /** The UI for document notes. */
            note: 3,
            /** The tab for managing bookmarks. */
            bookmark: 4,
            /** The document compare tab displays text differences and comparison controls. */
            docCompare: 5, 
            /** The tab to list annotations and metadata about their creation. */
            annList: 6
        },
        phases: {
            start: 0,
            processing: 1,
            stop: 2
        },

        /**
         * @enum {number} Define how the viewer zooms the current page.
         * @memberof vvDefines
         */
        zoomModes: {
            /** Fit the current page so it is completely visible in the window. */
            fitWindow: 0,
            /** Fit the current page so it is as wide as the window. */
            fitWidth: 1,
            /** Fit the current page so it is as tall as the window. */
            fitHeight: 2,
            /** Not used. */
            fitImage: 3,
            /** Refer to a percentage zoom value rather than automatically calculating a fit. */
            fitCustom: 4
        },
        corners: {
            upperLeft: 0,
            upperRight: 1,
            lowerLeft: 2,
            lowerRight: 3
        },
        lineEnds: {
            start: 0,
            end: 1
        },
        /**
         * @enum {number} Define different methods for how the viewer will retrieve its document list.
         * @memberof vvDefines
         */
        multipleDocModes: {
            /** The viewedDocuments option will pull available documents from a cookie holding document IDs that have been opened. */
            viewedDocuments: 0,
            /** The specifiedDocuments option will pull available documents an array passed into initialization. */
            specifiedDocuments: 1,
            /** The availableDocuments option will request a list of available documents from the content handler. */
            availableDocuments: 2
        },
        fontNames: [
            "Helvetica",
            "Times New Roman",
            "Arial",
            "Courier",
            "Courier New"
        ],
        fontSizes: [
            8, 9, 10, 11, 12, 14, 18, 24, 36
        ],
        annColors: [
            "FFFFFF", "000000", "C0C0C0", "008000", "FE0000", "FF7518",
            "FFFF00", "0000FF", "808000", "808080", "FF00FF", "800080",
            "800000", "00FF21", "FFD800", "000080", "008080", "00FFFF",
            "D2B48C", "F5F5DC", "73C2FB", "98FB98", "DCD0FF", "FDFD96"
        ],
        specialKeys: {
            /*jshint indent: false*/
            "backspace": "Backspace",
            "tab": "Tab",
            "return": "Return",
            "shift": "Shift",
            "ctrl": "Ctrl",
            "alt": "Alt",
            "pause": "Pause",
            "capslock": "Caps Lock",
            "esc": "Esc",
            "space": "Space",
            "pageup": "Page Up",
            "pagedown": "Page Down",
            "end": "End",
            "home": "Home",
            "left": "Left",
            "up": "Up",
            "right": "Right",
            "down": "Down",
            "insert": "Insert",
            "del": "Delete",
            "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
            "*": "*", "+": "+", ".": ".",
            "f1": "F1", "f2": "F2", "f3": "F3", "f4": "F4", "f5": "F5", "f6": "F6",
            "f7": "F7", "f8": "F8", "f9": "F9", "f10": "F10", "f11": "F11", "f12": "F12",
            "numlock": "Num Lock",
            "scroll": "Scroll",
            ";": ";", "/": "/", "\\": "\\", "'": "'",
            "meta": "Meta"
        },
        tiffTagValueHash: {
            "tiffTag254": { 0: "Zero", 1: "Reduced Image", 2: "Page", 4: "Mask" },
            "tiffTag255": { 1: "Image", 2: "Reduced Image", 3: "Page" },
            "tiffTag259": { 1: "NONE", 2: "CCITTRLE", 3: "CCITTFAX3", 4: "CCITTFAX4", 5: "LZW", 6: "OJPEG", 7: "PEG", 32766: "NEXT", 32771: "CCITTRLEW", 32773: "PACKBITS", 32809: "THUNDERSCAN", 32895: "IT8CTPAD", 32908: "PAXARFILM", 32909: "PIXARLOG", 32946: "DEFLATE", 8: "ADOBE_DEFLATE", 32947: "DCS", 34661: "JBIG", 34676: "SGILOG", 34677: "SGILOG24" },
            "tiffTag262": { 0: "MINISWHITE", 1: "MINISBLACK", 2: "RGB", 3: "PALETTE", 4: "MASK", 5: "SEPARATED", 6: "YCBCR", 8: "CIELAB", 9: "ICCLAB", 10: "ITULAB", 32844: "LOGL", 32845: "LOGLUV" },
            "tiffTag263": { 1: "BILEVEL", 2: "HALFTONE", 3: "ERRORDIFFUSE" },
            "tiffTag266": { 1: "MSB2LSB", 2: "LSB2MSB" },
            "tiffTag274": { 1: "TOPLEFT", 2: "TOPRIGHT", 3: "BOTRIGHT", 4: "BOTLEFT", 5: "LEFTTOP", 6: "RIGHTTOP", 7: "RIGHTBOT", 8: "LEFTBOT" },
            "tiffTag284": { 1: "CONTIG", 2: "SEPARATE" },
            "tiffTag290": { 1: "10S", 2: "100S", 3: "1000S", 4: "10000S", 5: "100000S" },
            "tiffTag296": { 1: "NONE", 2: "INCH", 3: "CENTIMETER" },
            "tiffTag338": { 0: "UNSPECIFIED", 1: "ASSOCALPHA", 2: "UNASSALPHA" }
        },
        localizeOptions: {
            //        language: "zz",
            pathPrefix: "resources/locale"
        },
        searchPatterns: [
             {
                 name: "Social Security Numbers",
                 localizeKey: "search.patterns.ssn",
                 pattern: "([0-9]{3} ?[ -]? ?[0-9]{2} ?[ -]? ?[0-9]{4})"
             },
             {
                 name: "Telephone Numbers",
                 localizeKey: "search.patterns.telephone",
                 pattern: "([0-9]{1,3}[ -.]?)?[\\(]?([0-9]{3}[\\)]?[ -.]?[0-9]{3}[ -.]?[0-9]{4})"
             },
             {
                 name: "Credit Card Numbers",
                 localizeKey: "search.patterns.cc",
                 pattern: "((([0-9]{4}[- .]?){3}([0-9]{4}))|(([0-9]{4}[- .]?)([0-9]{6}[- .]?)([0-9]{5})))"
             },
             {
                 name: "Email Addresses",
                 localizeKey: "search.patterns.email",
                 pattern: "\\S+@\\S+"
             }
        ],
        /* Default ZoomLevels are only to be used if zoomLevels in config.js is missing or invalid */
        defaultZoomLevels: [2, 3, 4, 6, 8, 10, 15, 20, 30, 40, 50, 75, 100, 150, 200, 300, 400, 600,
                800, 1000, 1500, 2000, 3000],
        aboutDialogTextContents: "&reg;1996-2020 All Rights Reserved.  (licensing information). VirtualViewer and the VirtualViewer logo are trademarks of the Snowbound Software Corporation. All Rights Reserved. Some of the trademarks used under license from partner companies."
    };
    return vvDefines;
});






