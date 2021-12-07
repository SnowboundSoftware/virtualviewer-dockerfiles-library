define(["vvDefines"], function(vvDefines) {
    /* The above call to define declares vvConfig as an AMD module, and declares that
     * it depends on vvDefines.
     */

    /**
     * These variables, defined in config.js, allow fine-tuned configuration of the viewer.
     * @namespace vvConfig
     * @global
     */
    var vvConfig =
        {
      /**
       * @member {string} servletPath Path to the VirtualViewer server code. If using the VirtualViewer Java platform,
       * this points to the VirtualViewer servlet, configured in web.xml; if using .NET, this points to the location configured in
       * web.config. This path is the foundation of all VirtualViewer API calls.
       * @memberof vvConfig
       */ 
        servletPath: "/virtualviewer/AjaxServlet",

        /*
         * -- DOCUMENT CONTROLS -- 
         */
    
        /**
         * @member {boolean} adminCreated If this is set to true, all watermarks will be marked as "adminCreated" and 
         * can only be modified by specific users.
         * @memberof vvConfig
         */ 
        adminCreated: false,
    
        /**
         * @member {number} pictureControlsTimeout Wait X milliseconds before requesting the adjusted images. This
         * exists to throttle how many times the viewer processes every single pixel of the image.
         * If the user quickly slides the sliders back and forth this will wait
         * X seconds after the final slider adjustment before requesting the updated image.
         * @memberof vvConfig
         */
        pictureControlsTimeout: 200,

        /**
         * @member {number} waitDialogTimeout Wait X milliseconds before displaying the "Please wait while your
         * image is loaded." dialog.
         * @memberof vvConfig
         */
        waitDialogTimeout: 1000,

        /** 
         * @member {boolean} imageScrollBars Turn on scroll bars for the image display. This disables the pan tool.
         * Please note that this variable is deprecated and will soon be removed.
         * @memberof vvConfig
         */ 
        imageScrollBars: true,
        
        /**
         * @member {number} panToolPreference There are 3 possible values for this variable: vvDefines.panToolPref.noPanTool,
         * vvDefines.panToolPref.panToolWithoutScrollbars, and vvDefines.panToolPref.panToolWithScrollbars. vvDefines.panToolPref.noPanTool
         * disables the pan tool. vvDefines.panToolPref.panToolWithoutScrollbars and vvDefines.panToolPref.panToolWithScrollbars both 
         * enable the pan tool with or without scrollbars.   
         */
        panToolPreference: vvDefines.panToolPref.noPanTool,
    
        /**
         * @member {boolean} invertedPanScrollX The pan tool allows the user to scroll without scrollbars. This setting
         * may invert the horizontal scroll for a more natural experience.
         * @memberof vvConfig
         */
        invertedPanScrollX: true,

        /**
         * @member {boolean} invertedPanScrollY The pan tool allows the user to scroll without scrollbars. This setting
         * may invert the vertical scroll for a more natural experience.
         * @memberof vvConfig
         */
        invertedPanScrollY: true,
    
        //
        /**
         * @member {number} scrollSpeed If a user is using a scrollwheel, this number represents how many ticks on the wheel it
         * takes to scroll through one page of a document at 100% zoom. The default value is 30, so it would take 30 ticks on the scroll
         * wheel. Put another way, one scroll event, whether on the wheel or by clicking the scrollbar, by default scrolls down 1/30th of
         * the page. This setting controls the user's experience of how fast the document scrolls by.
         * @memberof vvConfig
         */
        scrollSpeed: 30,
    
        /**
         * @member {number} continuousScrollBufferBeforeSize The number of pages to preload behind the current page, to provide a smoother
         * experience when scrolling up to previous pages. Note that browsers have limits on how many requests can be sent out concurrently
         * from a web page, so expanding the buffer may cause performance degradation as page requests stay in a pending state before going to
         * the server. On the other hand, reducing the buffer size may cause the viewer to appear slower, as users watch images load.
         * @memberof vvConfig
         */
        continuousScrollBufferBeforeSize: 1,

        /**
         * @member {number} continuousScrollBufferAfterSize The number of pages to preload after the current page, to provide a smoother
         * experience when scrolling down through the document. Note that browsers have limits on how many requests can be sent out concurrently
         * from a web page, so expanding the buffer may cause performance degradation as page requests stay in a pending state before going to
         * the server. On the other hand, reducing the buffer size may cause the viewer to appear slower, as users watch images load.
         * @memberof vvConfig
         */
        continuousScrollBufferAfterSize: 3, 

        /**
         * @member {number} maxNumberOfTabs The maximum number of documents allowed to be open at the same time. 
         * 
         * @memberof vvConfig
         */
        maxNumberOfTabs: 10,

        /**
         * @member {boolean} pageManipulations Enable/disable page manipulation. If this is false, users may not rearrange pages in
         * a document.
         * @memberof vvConfig
         */
        pageManipulations: true,

        /**
         * @member {boolean} pageManipulationsNewDocumentMenu In the right-click menu that appears on thumbnails, enable and disable the
         * "new document" options: Copy to New Document and Cut to New Document.
         * @memberof vvConfig
         */
        pageManipulationsNewDocumentMenu: true,
        
        /**
         * @member {string[]} restrictedPageManipulationFormats A list of document formats that should not allow page manipulations. This is
         * a blacklist, so will only apply if vvConfig.pageManipulations is set to true.
         * @memberof vvConfig
         */
        restrictedPageManipulationFormats : [],
    
        /**
         * @member {boolean} enableTextExtraction Allow the viewer to retrieve text from the server. If this is set, text may be highlighted,
         * copied, and redacted on pages that contain text. Not all formats contain readable text.
         * @memberof vvConfig
         */
        enableTextExtraction: true,
    
        /**
         * @member {boolean} copySelectedText If text has been loaded from the server for a page, this controls whether that text may be
         * copied to the system clipboard.
         * @memberof vvConfig
         */
        copySelectedText: true,
        
        /**
         * @member {boolean} enableCopyPasteBetweenSessions If true, pages can be copied and pasted between different tabs or windows (of the same browser).
         * If false, page copy and paste only works within the same tab.
         * @memberof vvConfig
         */
        enableCopyPasteBetweenSessions: true,
    
        /**
         * @member {number} vvConfig.guideLineWidth Guide Mode is a feature that displays movable horizontal and vertical lines on the current document,
         * allowing a user to guide the eye to specific locations on the image. This setting controls the pixel width of the guide lines.
         * @memberof vvConfig
         */
        guideLineWidth : 2,
        /**
         * @member {string} activeGuideColor Control the color of the active guide lines. This should be a CSS color string.
         * @see vvConfig.guideLineWidth
         * @memberof vvConfig
         */
        activeGuideColor : "#000099",

        /**
         * @member {string} lockedGuideColor Control the color of the guide lines if they are locked in place. This should be a CSS color string.
         * @see vvConfig.guideLineWidth
         * @memberof vvConfig
         */
        lockedGuideColor : "#990000",
    
        /**
         * @member {boolean} splitScreen Enable or disable split screen. If true, the viewer may split the main viewing pane into two,
         * and load a document in each pane. The Document Compare feature depends on this setting and will not be available if this is 
         * set to false.
         * @see VirtualViewer#compareDocuments
         * @memberof vvConfig
         */
        splitScreen: true,
    
        /**
         * @member {number[]} screenSizes A two-member array, defining the initial width of the split-screen panes. These panes may be resized
         * by the user. The initial widths are in whole number percentages (eg, 50 and 50) so should add to 100.
         * @see vvConfig.splitScreen
         * @memberof vvConfig
         */
        screenSizes: [50, 50],
        
        /**
         * @member {boolean} splitScrollLock Enable or Disable scroll lock for Split screen. Scroll lock will make sure the two documents scroll
         * together, which is useful for document comparison and other split screen work. 
         * @memberof vvConfig
         */
        splitScrollLock: true,
    
        /**
         * @member {boolean} zoomLock Enable or Disable zoom lock for Split screen. Zoom lock will make sure the two documents zoom
         * together, which is useful for document comparison and other split screen work. 
         * @memberof vvConfig
         */
        zoomLock: true,
        
        /**
         * @member {boolean} disableImageTabs Enable or disable image tabs and remove the tab bar above the document. 
         * @memberof vvConfig
         */
        disableImageTabs: false,
        
        /**
         * @member {boolean} disableToolbar Enable or disable the rendering of the top toolbar. 
         * @memberof vvConfig
         */
        disableToolbar: false,
        
        /**
         * @member {boolean} disableAnnToolbar Enable or disable the rendering of the annotation toolbar. 
         * @memberof vvConfig
         */        
        disableAnnToolbar: false,

        /**
         * @member {boolean} synchronousInit Force the very first server call, which retrieves server configuration, to run synchronously. This will
         * block initialization until it is complete, and will ensure that only one server session (seen in the JSESSIONID cookie) is created. 
         * While this won't necessarily cause a large performance hit, it should be set cautiously.
         * @memberof vvConfig
         */
        synchronousInit: false,
        
        /* 
         * -- ANNOTATIONS --
         */   
        
        /**
         * @member {boolean} readOnlyAnnotationMode Enable or disable read-only annotation mode. In read-only mode, users
         * cannot edit, move or create annotations. 
         * @memberof vvConfig
         */
        readOnlyAnnotationMode: false,

        /**
         * @member {boolean|null} enableCustomOpacity Enable or disable UI for customizable annotation opacity. If enabled, most solid-color annotations can
         * be set to transparent or semi-transparent. If disabled, there will be no transparency controls for most annotations, although text
         * annotations can still be set to either a colored or fully transparent background.
         * 
         * By default this is null - custom opacity will be enabled if the server's annotation output format supports it. (Currently only the Snowbound 
         * Annotation XML format supports custom opacity.) This behavior can be overridden with this configuration: if you're using Snowbound XML but don't want
         * custom opacity, set this to false; if you are using a format that doesn't support saving opacity but you want to allow users to create transparent
         * annotations for immediate export, set this to true.
         * 
         * @memberof vvConfig
         */
        enableCustomOpacity: null,
    
        /**
         * @member {boolean} showAnnNavToggle A small panel in the page thumbnails tab allows the user to navigate between annotations on the
         * current document. This setting enables and disables the presence of that panel and the button that toggles its visibility.
         * @memberof vvConfig
         */
        showAnnNavToggle: false,
    
        /**
         * @member {boolean} showAnnIndicators Annotation indicators are small red checkmarks that overlay the thumbnails of pages containing
         * annotations. This setting controls whether those indicators appear.
         * @memberof vvConfig
         */
        showAnnIndicators: false,

        /**
         * @member {boolean} sendDocumentWithAnnotations The deprecated function sendDocument sets a number of its parameters through configuration.
         * This setting controls whether annotations will be included on a sent document.
         * @see VirtualViewer#sendDocument
         * @memberof vvConfig
         */
        sendDocumentWithAnnotations: false,
    
        /**
         * @member {boolean} sendDocumentWithWatermarks The deprecated function sendDocument sets a number of its parameters through configuration.
         * This setting controls whether watermarks will be included on a sent document.
         * @see VirtualViewer#sendDocument
         * @memberof vvConfig
         */
        sendDocumentWithWatermarks: false,
    
        /**
         * // TODO - unused
         * @member {boolean} exportBurnAnnotations Whether to burn annotations in export.
         * @deprecated
         * @memberof vvConfig
         */
        exportBurnAnnotations: true,

        /**
         * @member {boolean} includeRedactions A default value for the Burn Redactions checkbox in Save/Export/Email dialogs.
         * @memberof vvConfig
         */
        includeRedactions: true,

        /**
         * @member {boolean} includeRedactionTags A default value for the Include Redaction Tags checkbox in Save/Export/Email dialogs. This is only
         * respected if the Burn Redactions checkbox is checked.
         * @see vvConfig.includeRedactions
         * @memberof vvConfig
         */
        includeRedactionTags: true,

        /**
         * @member {boolean} includeDocumentNotes A default value for the Include Document Notes checkbox in Save/Export/Email dialogs. If this 
         * is checked, document notes will be appended as text pages to the document.
         * @memberof vvConfig
         */
        includeDocumentNotes: false,

        /**
         * @member {boolean} includeWatermarks A default value for the Include Watermarks checkbox in Save/Export/Email dialogs. If this 
         * is checked, watermarks will be included as part of the exported image.
         * @memberof vvConfig
         */
        includeWatermarks: true,

        /**
         * @member {boolean} oneLayerPerAnnotation If this is true, each new annotation will have its own layer. Layers are saved in separate 
         * annotation files, so each annotation will be saved in its own file. If false, annotations will share layers, and layers
         * can be renamed, hidden, and shown. It is recommended that this value be set to true for certain annotation formats.
         * @memberof vvConfig
         */
        oneLayerPerAnnotation: false,
    
        /**
         * @member {string} autoLayerPrefix If oneLayerPerAnnotation is set to true, this value will be used to generate layer names
         * for each annotation layer.
         * @see vvConfig.oneLayerPerAnnotation
         * @memberof vvConfig
         */
        autoLayerPrefix: null,
    
        /**
         * @member {string} autoLayerSuffix If oneLayerPerAnnotation is set to true, this value will be used to generate layer names
         * for each annotation layer.
         * @see vvConfig.oneLayerPerAnnotation
         * @memberof vvConfig
         */
        autoLayerSuffix: null,

        /**
         * @member {number} collapseStickiesSize The default width, in pixels, of a collapsed sticky note annotation.
         * @see vvConfig.collapseStickiesByDefault
         * @memberof vvConfig
         */
        collapseStickiesSize: 50,
    
        /**
         * @member {boolean} collapseStickiesByDefault Whether to load sticky notes in a collapsed state. In a collapsed state, 
         * a sticky note is a square with no visible text, and can be expanded by the user.
         * @memberof vvConfig
         */
        collapseStickiesByDefault: false,
        /**
         * @member {boolean} immediatelyEditTextAnnotations If true, newly added text annotations will immediately enter 'edit'
         * mode with the contents highlighted, so the default text can be overwritten.
         * @memberof vvConfig
         */
        immediatelyEditTextAnnotations: true,
    
        /**
         * @member {boolean} autoConfirmTextAnnotations If true, a text annotation will update as it is edited in the annotation edit menu. 
         * Otherwise, the user must save or cancel the in-progress text.
         * @memberof vvConfig
         */
        autoConfirmTextAnnotations: false,
    
        /**
         * @member {number} polygonNubSize The size of the square handles used to resize annotations.
         * @see vvConfig.polygonNubFillColor
         * @see vvConfig.polygonNubSizeTouch
         * @memberof vvConfig
         */
        polygonNubSize: 10,
        /**
         * @member {number} polygonNubSizeTouch The size of the square handles used to resize annotations, sized larger for a touch environment.
         * @see vvConfig.polygonNubFillColor
         * @see vvConfig.polygonNubSize
         * @memberof vvConfig
         */
        polygonNubSizeTouch: 40,

        /**
         * @member {string} polygonNubFillColor The color of the square handles used to resize annotations. This value should be a CSS color string.
         * @see vvConfig.polygonNubSizeTouch
         * @see vvConfig.polygonNubSize
         * @memberof vvConfig
         */
        polygonNubFillColor: "rgba(0,0,255,.40)",
  
        // Enable/Disable Base64 encoding of annotations
        /**
         * @member {boolean} base64EncodeAnnotations Enable or disable Base64 encoding of annotations.
         * @memberof vvConfig
         */
        base64EncodeAnnotations: true,

        /**
         * @member {boolean} rotateTextAnnotations Set this to true if the content of text annotations should rotate as the document rotates,
         * and otherwise if text should always appear right-side up during rotation.
         * @memberof vvConfig
         */
        rotateTextAnnotations: true,

        /**
         * @member {boolean} enableTextRubberStamp Enable or disable pre-defined text rubber stamps. Text rubber stamps, also called Custom Stamps,
         * can be defined in vvConfig and modified in User Preferences. They are text annotations with pre-defined default text and formatting.
         * @see vvConfig.textRubberStamps
         * @memberof vvConfig
         */
        enableTextRubberStamp: true,
    
        // Enable/Disable single-click Image Rubber Stamp functionality
        /**
         * @member {boolean} enableSingleClickImageRubberStamp If set to true, users will be able to place image stamps with one click. Otherwise,
         * stamps can be drawn with by dragging a rectangle on the image. If true, stamps can still be resized after placement, but will be placed
         * on the canvas at the image's default size.
         * @memberof vvConfig
         */
        enableSingleClickImageRubberStamp: true,
        
        /**
         * @member {boolean} enableStampAspectRatioLock enable or disable locking of the aspect ratio. This will force the image to never become
         * mishapen when you resize it.
         * @memberOf vvConfig
         */
        enableStampAspectRatioLock:true,
    
        /**
         * @member {object[]} textRubberStamps Define default text rubber stamps. All these values an be modified in User Preferences.
         * @property {string} textRubberStamps[].textString The default text of the stamp.
         * @property {string} textRubberStamps[].fontFace A default font available in the browser.
         * @property {number} textRubberStamps[].fontSize A default font size.
         * @property {boolean} textRubberStamps[].fontBold Whether the text should be bolded.
         * @property {boolean} textRubberStamps[].fontItalic Whether the text should be italic.
         * @property {string} textRubberStamps[].fontColor A hex string, without the leading hash, of the font's color. For instance, "00FF00".
         * @property {string} textRubberStamps[].fillColor A hex string, without the leading hash, of the stamp's background color, or null for a transparent background. 
         * @memberof vvConfig
         */
        textRubberStamps: [],

        /** 
         * @member {object} stickyAnnButtons Allow the use of "sticky" annotation buttons. 
         * The annotation will stay "on" until it is clicked again or another annotation is selected, so multiple annotations can be drawn
         * in a row without re-selecting the button. Each key is an annotation type.
         * @memberof vvConfig
         */
        stickyAnnButtons: {
            "Sticky Note": false,
            "Rubber Stamp": false,
            "Bitmap": false,
            "Line": false,
            "Arrow": false,
            "Freehand": false,
            "HighlightRectangle": false,
            "FilledRectangle": false,
            "FilledEllipse": false,
            "FilledPolygon": false,
            "Rectangle": false,  
            "Ellipse": false,
            "Polygon": false,
            "RedactionRect": false
        },
    
        /**
         * @global
         * @typedef annotationProperties Default appearance options for all annotations.
         * @property {string} lineColor A hex color value, absent the leading hash, for the line color of annotations. For instance, "00FF00". 
         * This will not be used for filled annotation types.
         * @property {string} lineWidth In pixels, the default line width for annotations without fill.
         * @property {string} fillCollor A hex color value, absent the leading hash, for the fill color of annotations. For instance, "00FF00".
         * This will not be used for unfilled annotation types.
         * @property {string} stickyFillColor A hex color value, absent the leading hash, for the fill color of sticky note annotations specifically. 
         * For instance, "00FF00".
         * @property {number} stickyMargin The margin, in pixels, around the text in a sticky note annotation.
         * @property {string} highlightFillColor A hex color value, absent the leading hash, for the fill color of highlight annotations specifically. 
         * For instance, "00FF00".
         * @property {number} highlightOpacity A percentage, in decimal form, of the opacity of a highlight annotation. For instance, 0.5 for 50%
         * opacity.
         * @property {string} redactionFillColor A hex color value, absent the leading hash, for the fill color of redactions specifically. 
         * For instance, "000000".
         * @property {number} redactionOpacity A percentage, in decimal form, of the opacity of an in-progress redaction annotation. 
         * For instance, 0.5 for 50% opacity. Burned redactions will be fully opaque, but this value can configure the transparency 
         * of a redaction that is not yet burned into the image.
         * @property {string} textString The default initial text for a text annotation or sticky note annotation.
         * @property {string} textBackgroundColor A hex color value, absent the leading hash, for the background fill color of text annotations; null for a transparent background.
         * @property {string} fontFace The font of the text in a text annotation or sticky note annotation.
         * @property {number} fontSize The size of the text in a text annotation or sticky note annotation.
         * @property {boolean} fontBold Whether the font in a text annotation or sticky note annotation is bolded.
         * @property {boolean} fontItalic Whether the font in a text annotation or sticky note annotation is italicized.
         * @property {string} fontColor A hex color value, absent the leading hash, for the font color of text in annotations. 
         * For instance, "00FF00".
         */
        /**
         * @member {annotationProperties} annotationDefaults Default appearance options for all annotations.
         * @memberof vvConfig
         */
        annotationDefaults: { 
            lineColor: "FE0000",
            lineWidth: 3,

            fillColor: "FE0000",
            fillOpacity: 1,

            stickyFillColor: "FCEFA1",
            stickyMargin: 10,

            highlightFillColor: "FCEFA1",
            highlightOpacity: 0.4,
        
            redactionFillColor: "000000",
            redactionOpacity: 0.5,

            textString: "Text",
            textBackgroundColor: null,

            fontFace: "Arial",
            fontSize: 14,
            fontBold: false, 
            fontItalic: false, 
            fontStrike: false,    // for future use
            fontUnderline: false, // for future use
            fontColor: "000000" 
        },
    
        /**
         * @member {boolean} enableAnnotationCommenting Enable or disable the annotation commenting feature. If enabled, users can
         * leave comments on individual annotations.
         * @memberof vvConfig
         */
        enableAnnotationCommenting: true,
    
        /**
         * @member {string[]} annotationTags A list of strings that can be set as annotation tags.
         * If this list is empty, the user will not be able to use annotation tags. An example set of
         * tags might be: ["Confidential", "Redaction", "Social Security", "Credit Info"].
         * @memberof vvConfig
         */
        annotationTags: [],
    
        /*
         * -- ZOOM --
         */
        
        /**
         * @member {vvDefines.zoomModes} defaultZoomMode The initial zoom of the document. If set to {@link vvDefines.zoomModes.fitCustom}, 
         * then {@link vvConfig.defaultZoomLevel} must be set as well.
         * @see vvDefines.zoomModes
         * @memberof vvConfig
         */
        defaultZoomMode: vvDefines.zoomModes.fitWindow,
    
        /**
         * @member {boolean} fitLastBetweenDocuments Set to true to use the previously-open document's zoom percent instead of defaults defined
         * by {@link vvConfig.defaultZoomMode} and {@link vvConfig.defaultZoomLevel}.
         * @see vvConfig.positionLastBetweenDocuments
         * @memberof vvConfig
         */
        fitLastBetweenDocuments: false,

        /**
         * @member {boolean} positionLastBetweenDocuments Retain the scroll position of the previously-open document. So, for instance,
         * the user may scroll document A to the third page, and scroll a little to the right to center a particular form field on the screen.
         * When the user opens document B, it will open scrolled to the third page and a little to the right. This setting works best with
         * {@link vvConfig.fitLastBetweenDocuments} enabled, and with documents of the same approximate size.
         * @see vvConfig.fitLastBetweenDocuments
         * @memberof vvConfig
         */
        positionLastBetweenDocuments: false,
    
        /**
         * @member {number} defaultZoomLevel Define the default zoom percent, 
         * if {@link vvConfig.defaultZoomMode} is set to {@link vvDefines.zoomModes.fitCustom}. Otherwise, the setting is not respected. This
         * should be a whole-number percent out of 100.
         * @see vvConfig.defaultZoomMode
         * @memberof vvConfig
         */
        defaultZoomLevel: 100,
    
        /**
         * @member {number[]} zoomLevels Define the intervals at which to zoom. The zoom in and zoom out buttons in the viewer
         * will traverse through the levels in this array. These should be whole-number percentages out of 100.
         * @memberof vvConfig
         */
        zoomLevels : [ 2, 3, 4, 6, 8, 10, 15, 20, 30, 40, 50, 75, 100, 150, 200, 300, 400, 600,
                800, 1000],

        /**
         * @member {number} maxZoomPercent The furthest in that the user can zoom. This should be a whole-number percentage out of 100.
         * @memberof vvConfig
         */
        maxZoomPercent: 500,
 
        // Wait X milliseconds before requesting the zoomed image.  This exists so
        // that if the user hits zoom several times quickly we spare the server load
        // by only requesting the final zoom level
        /**
         * @member {number} zoomTimeout Wait X milliseconds before requesting the zoomed image. If server scaling is in use, 
         * this will reduce the server load by only requesting the final zoom level; if using browser scaling or JS scaling, this will
         * increase performance by only processing the final zoom level.
         * @see vvConfig.serverScaling
         * @see vvConfig.useBrowserScaling
         * @memberof vvConfig
         */
        zoomTimeout: 500, 
    
    
        /*
         * -- IMAGE SCALING --
         */
        /**
         * @member {boolean} serverScaling Force server-only scaling. The viewer will request scaled images from the server rather than
         * resizing them client-side. Setting this to true will increase performance on slow machines, but will have more latency costs
         * and put more stress on the server.
         * @memberof vvConfig
         */
        serverScaling: false,
    
        /**
         * @member {boolean} useBrowserScaling Force web browser build-in scaling, instead of more resource intensive 
         * (but higher quality) JS scaling.
         * @memberof vvConfig
         */
        useBrowserScaling: false,
        
        /**
         * @member {boolean} enableJSScalingForIE Allow Internet Explorer to use Javascript image scaling when resizing. Javascript scaling
         * is higher-quality than browser-scaling and puts less load on the server than serverScaling, but can be unreliable for some
         * documents when using Internet Explorer due to the age of the browser.
         * @memberof vvConfig
         */
        enableJSScalingForIE: false,
    
        /**
         * @member {"server"|"browser"|"js"} singleThreadedScalingMode An additional option for browsers that do not support 
         * WebWorkers (ie9). This will significantly degrade JS scaling performance.  This setting defines the scaling
         * method for these browsers. Valid values are: "server", like {@link vvConfig.serverScaling}; "browser", like {@link vvConfig.useBrowserScaling};
         * and "js", to use the default javascript scaling in a single-threaded manner, which is not recommended.
         * @memberof vvConfig
         */
        singleThreadedScalingMode: "server",
        
        /**
         *  --Video--
         */
        /**
         * @member {boolean} videoAutoplay Autoplay videos when they are ready.
         * @see vvConfig.videoControls
         * @see vvConfig.videoMuted
         * @see vvConfig.videoStretch
         * @memberof vvConfig
         */
        videoAutoplay:false,
        /**
         * @member {boolean} videoControls If true, display the controls on the HTML5 video player. If false, the video can be controlled through
         * VirtualViewer API or by interacting with the player itself.
         * @see VirtualViewer#playVideo
         * @see VirtualViewer#getMediaPlayer
         * @see vvConfig.videoAutoplay
         * @see vvConfig.videoMuted
         * @see vvConfig.videoStretch
         * @memberof vvConfig
         */
        videoControls:true,
        /**
         * @member {boolean} videoMuted If true, videos will load muted, and must be manually unmuted.
         * @see vvConfig.videoControls
         * @see vvConfig.videoAutoplay
         * @see vvConfig.videoStretch
         * @memberof vvConfig
         */
        videoMuted:true,
        /**
         * @member {boolean} videoStretch Whether the video player will stretch across the viewport of the viewer, or play at the 
         * video's natural size in the middle.
         * @see vvConfig.videoControls
         * @see vvConfig.videoAutoplay
         * @see vvConfig.videoMuted
         * @memberof vvConfig
         */
        videoStretch:true,
        
        /**
         *  --Audio--
         */
        
        /**
         * @member {boolean} audioLoop When enabled, audio will loop when it finishes playing.
         * @see vvConfig.audioBackground
         * @memberof vvConfig
         */
        audioLoop:true,
        
        /**
         * @member {boolean} audioBackground When enabled, audio won't pause when you switch tabs,
         * allowing it to be played in the background while viewing other documents.
         * @see vvConfig.audioLoop
         * @memberof vvConfig
         */
        audioBackground:true,
        
        /*
         * -- PRINTING --
         */
    
        /**
         * @member {boolean} disableDirectPDFPrinting By default, VirtualViewer tries to use the browser's 
         * built-in support for PDF when printing. Setting this flag to false will force all browsers to use PDFJS.
         * @memberof vvConfig
         */
        disableDirectPDFPrinting: false,

        /**
         * @member {boolean} printBurnAnnotations A default value for the Include Annotations checkbox on the print dialog.
         * @memberof vvConfig
         */
        printBurnAnnotations: true,
        
        /**
         * @member {boolean} showFitToPageOption Whether to display the "fit to page" option in the print dialog. "Fit to page" will 
         * force image PDF pages to a standard letter size and center images on the page.
         * @memberof vvConfig
         */
        showFitToPageOption: false,
    
        /*
         * -- Document Notes / Thumbnails / Search  -- 
         */
    
        /**
         * @member {boolean} enableDocumentNotes Enable or disable the use of document notes.
         * @memberof vvConfig
         */
        enableDocumentNotes: true,
    
        // Note Templates
        /**
         * @global
         * @typedef {object} noteTemplate A pre-written document note.
         * @property {string} noteTemplate.templateName The displayed name of the template.
         * @property {string} noteTemplate.templateString The contents of the document note.
         */
        /**
         * @member {noteTemplate[]} noteTemplates A list of note templates. These note templates are document notes
         * that can be added quickly with a click. They can be modified in User Preferences.
         * @memberof vvConfig
         */
        noteTemplates: [
            {
                templateName: "Approve",
                templateString: "I approve this note" },
            {
                templateName: "Reject",
                templateString: "I reject this note" }  
        ],
        
        /**
         * @member {vvDefines.thumbnailTabs} defaultThumbnailTab Define which thumbnail tab should be active
         * when switching to a document. In some cases, the defined default may not be usable, in which case the
         * viewer will fall back to another available option.
         * @memberof vvConfig
         */
        defaultThumbnailTab: vvDefines.thumbnailTabs.page,
    
        /**
         * @member {boolean} showThumbnailPanel Display thumbnail panel when initializing the viewer, or start with the panel hidden.
         * @memberof vvConfig
         */
        showThumbnailPanel: true,
        
        /*
         * @member {boolean} leftSideThumbPanel Enable or disable the thumbnail panel being displayed on the left side of the viewer.
         * @memberof vvConfig
         */
        leftSideThumbPanel: false,

        /**
         * @member {boolean} showPageThumbnails Enable or disable the thumbnail tab showing page thumbnails.
         * @memberof vvConfig
         */
        showPageThumbnails: true,

        /**
         * @member {boolean} showDocThumbnails Enable or disable the thumbnail tab showing document thumbnails.
         * @memberof vvConfig
         */
        showDocThumbnails: true,		
        
        /**
         * @member {boolean} showDocumentFilter Enable or disable the document thumbnail filter. This is a text input box that allows the user
         * to filter the document thumbnails by the document's ID or display name.
         * @memberof vvConfig
         */
        showDocumentFilter: true,

        /**
         * @member {boolean} showSearch Enable or disable the search tab in the thumbnail pane.
         * @memberof vvConfig
         */
        showSearch: true,
        
        /**
         * @member {boolean} showAnnotationList Enable or disable the annotation list tab in the thumbnail pane.
         * @memberof vvConfig
         */
        showAnnotationList: false,
    
        /**
         * @member {boolean} showBookmarkThumbnails Enable or disable the bookmark manager tab in the thumbnail pane.
         * @memberof vvConfig
         */
        showBookmarkThumbnails: true,

        /**
         * @member {number} searchBatchSize Define the number of pages to search at a time with document search. A larger value can increase 
         * efficiency for searching the entire document, especially for servers with a lot of resources; a smaller value can 
         * increase responsiveness and decrease the time to display initial results, especially for servers with fewer resources.
         * @memberof vvConfig
         */
        searchBatchSize: 50,
    
        /**
         * @member {boolean} searchCaseSensitive Set the default case sensitivity for document text searches.
         * @memberof vvConfig
         */
        searchCaseSensitive: false,
    
        /**
         * @member {boolean} searchRedactionTags Allow the user to tag redactions created by the search and redact action.
         * @memberof vvConfig
         */
        searchRedactionTags: false,
        
        /**
         * @member {object} searchColors Specify the colors that will highlight document search results.
         * @property {string} searchColors.matchColor The color of all text that matches the search term. The color 
         * should be in rgba format: "rgba(255,255,255,0.5)".
         * @property {string} searchColors.selectedMatchColor As the user navigates through the search results, the currently
         * active, or focused, match will appear in this color. The color should be in rgba format: "rgba(255,255,255,0.5)".
         * @memberof vvConfig
         */
        searchColors: {
            matchColor: "rgba(255,78,0,0.2)",
            selectedMatchColor: "rgba(255,255,0,0.2)"
        },

        /*
         * -- HOTKEYS / INFOFIELD --
         */
         
        /**
         * @global
         * @typedef {object} Hotkey A VirtualViewer-specific hotkey.
         * @property {string} key Define one or more key patterns, separated by commas, as the hotkey.
         * @property {function} method The method triggered by the hotkey.
         * @property {string} localizedValue A reference to a locale json file, defining the displayed text of the hotkey hint.
         * @property {string} defaultValue A default hotkey hint.
         */
        /**
         * @member {Hotkey[]} hotkeys Configure keyboard shortcuts.
         * @memberof vvConfig
         */
        hotkeys: [ 
                  {
                      key:'ctrl+shift+=,ctrl+shift+z,ctrl+shift+plusKeypad', // ctrl+shift+= will not work in IE 9 or IE 10
                      method: function() { 
                          virtualViewer.zoomIn();
                      },
                      localizedValue: 'hotkeyHints.zoomIn',
                      defaultValue: 'Zoom In'
                  },
                  {
                      key:'ctrl+shift+-,ctrl+shift+x,ctrl+shift+minusKeypad', // ctrl+shift+- will not work in IE 9 or IE 10
                      method: function() { 
                          virtualViewer.zoomOut();
                      },
                      localizedValue: 'hotkeyHints.zoomOut',
                      defaultValue: 'Zoom Out'
                  },
                  {
                      key:'ctrl+shift+e', 
                      method: function() { 
                          virtualViewer.exportDocumentDialog();
                      },
                      localizedValue: 'hotkeyHints.exportDocument',
                      defaultValue: 'Export Document'
                  },
                  {
                      key:'ctrl+shift+p', 
                      method: function() { 
                          virtualViewer.printDocumentDialog();
                      },
                      localizedValue: 'hotkeyHints.printDocument',
                      defaultValue: 'Print Document'
                  },
                  {
                      key:'end', 
                      method: function() { 
                          virtualViewer.lastPage();
                      },
                      localizedValue: 'hotkeyHints.lastPage',
                      defaultValue: 'Last Page'
                  },
                  {
                      key:'home',
                      method: function() { 
                          virtualViewer.firstPage();
                      },
                      localizedValue: 'hotkeyHints.firstPage',
                      defaultValue: 'First Page'
                  },
                  {
                      key:'ctrl+shift+pageup',
                      method: function() { 
                          virtualViewer.previousPage();
                      },
                      localizedValue: 'hotkeyHints.previousPage',
                      defaultValue: 'Previous Page'
                  },
                  {
                      key:'ctrl+shift+pagedown',
                      method: function() { 
                          virtualViewer.nextPage();
                      },
                      localizedValue: 'hotkeyHints.nextPage',
                      defaultValue: 'Next Page'
                  },
                  {
                      key:'ctrl+shift+l',
                      method: function() { 
                          virtualViewer.rotateCounter();
                      },
                      localizedValue: 'hotkeyHints.rotateCounter',
                      defaultValue: 'Rotate Left'
                  },
                  {
                      key:'ctrl+shift+r',
                      method: function() { 
                          virtualViewer.rotateClock();
                      },
                      localizedValue: 'hotkeyHints.rotateClock',
                      defaultValue: 'Rotate Right'
                  },
                  {
                      key:'ctrl+shift+t',
                      method: function() { 
                          virtualViewer.toggleThumbnailPanel();
                      },
                      localizedValue: 'hotkeyHints.toggleThumbnailPanel',
                      defaultValue: 'Toggle Thumbnail Panel'
                  },
                  {
                      key:'ctrl+shift+c',
                      method: function() { 
                          virtualViewer.copyTextUserEventHandler();
                      },
                      localizedValue: 'hotkeyHints.copyText',
                      defaultValue: 'Copy Selected Text'
                  },
                  {
                      key:'ctrl+shift+d',
                      method: function() { 
                          virtualViewer.toggleColumnSelectionMode();
                      },
                      localizedValue: 'hotkeyHints.toggleTextSelectionMode',
                      defaultValue: 'Toggle Column Text Selection'
                  },
                  {
                      key:'ctrl+shift+u',
                      method: function() { 
                          virtualViewer.toggleImageInfo();
                      },
                      localizedValue: 'hotkeyHints.toggleImageInfo',
                      defaultValue: 'Toggle Image Info Dialog'
                  },
                  {
                      key:'ctrl+shift+g',
                      method: function() { 
                          virtualViewer.collapseAllStickyNotes(true,true);
                      },
                      localizedValue: 'hotkeyHints.collapseStickyNotes',
                      defaultValue: 'Collapse Sticky Notes'
                  },
                  {
                      key:'ctrl+shift+n',
                      method: function() { 
                          virtualViewer.collapseAllStickyNotes(false,true);
                      },
                      localizedValue: 'hotkeyHints.expandStickyNotes',
                      defaultValue: 'Expand Sticky Notes'
                  },
                  {
                      key:'ctrl+/',
                      method: function() { 
                          virtualViewer.toggleKeyboardHints();
                      },
                      localizedValue: 'hotkeyHints.showKeyboardHints',
                      defaultValue: 'Show Keyboard Hints'
                  },
                  {
                      key:'ctrl+\'',
                      method: function() { 
                          virtualViewer.showUserPreferencesDialog();
                      },
                      localizedValue: 'hotkeyHints.showUserPreferences',
                      defaultValue: 'Show User Preferences'    
                  }
        ],

        /**
         * @member {Hotkey[]} customHotKeys Create additional, custom hotkeys to control the viewer.
         * @memberof vvConfig
         */
        customHotKeys: [   

        ],
     
        /**
         * @member {number} maxInfoFieldLength Limit the length of information fields in the Image Info dialog.
         * @memberof vvConfig
         */
        maxInfoFieldLength : 128,
      
        /**
         * @global
         * @typedef {object} ImageInfoField 
         * @property {string} fieldId The ID of the field. This should never be changed.
         * @property {string} fieldCaption The caption of the field displayed in the Image Info dialog.
         */
        /**
         * @member {ImageInfoField[]} imageInfoFields Define the fields that will be displayed in the Image Info dialog.
         * @memberof vvConfig
         */
        imageInfoFields : [ 
            // Define the *Document-Specific* properties here in the order they are to be displayed     
            { fieldId: "documentId", 
                fieldCaption: "Document ID"}, 
            { fieldId: "documentDisplayName", 
                fieldCaption: "Document Name" },
            { fieldId: "documentByteSize", 
                fieldCaption: "File Size (Bytes)" },
            { fieldId: "pageCount", 
                fieldCaption: "Page Count" },
            { fieldId: "documentFormat", 
                fieldCaption: "File Format" },
          
            // Define the *Page-Specific* properties here in the order they are to be displayed
          
            { fieldId: "compressionType", // This is only for Tiff files and will be 'TIFF_G4_FAX', 'TIFF_JPEG', 'TIFF_LZW', etc
                fieldCaption: "Compression Type" },
            { fieldId: "imageSizePixels", 
                fieldCaption: "Size in Pixels" },         
            { fieldId: "imageSizeInches", 
                fieldCaption: "Image Size" },
            { fieldId: "dpi", 
                fieldCaption: "DPI" },
            { fieldId: "bitDepth", 
                fieldCaption: "Bit Depth" },          
            { fieldId: "pageNumber", 
                fieldCaption: "Page Number" },          
            { fieldId: "tiffTag315", 
                fieldCaption: "Copyright" }
        ],
    
    /**
     * -- Stamps --
     */
        /**
         * @global
         * @typedef {object} ImageStamp Data used to load an image rubber stamp.
         * @property {string} stampTitle The displayed title of the image stamp.
         * @property {string} url The URI from which to load the stamp image.
         * @property {number} [width=The internally-defined width of the image] The width of the image.
         * @property {number} [height=The internally-defined height of the image] The height of the image.
         * @property {string} [annotationId] An ID to define a stamp. This ID will be set to the annID property of every stamp annotation of this type.
         */
        /**
         * @member {ImageStamp[]} initialStamps Defines image rubber stamps to load and display at startup.
         * @see VirtualViewer#createImageStampArray
         * @memberof vvConfig
         */
        initialStamps : [
            {
                stampTitle:"Approved",
                url:"./resources/stamps/Approved.png",
                width:535,
                height:293
            },
            {
                stampTitle:"Confidential",
                url:"./resources/stamps/Confidential.png",
                width:593,
                height:285
            },
            {
                stampTitle:"Denied",
                url:"./resources/stamps/Denied.png",
                width:448,
                height:287
            },
            {
                stampTitle:"Initial Here",
                url:"./resources/stamps/InitialHere.png",
                width:682,
                height:192
            },
            {
                stampTitle:"Pending",
                url:"./resources/stamps/Pending.png",
                width:675,
                height:282
            },
            {
                stampTitle:"Received",
                url:"./resources/stamps/Received.png",
                width:681,
                height:269
            },
            {
                stampTitle:"Sign Here",
                url:"./resources/stamps/SignHere.png",
                width:584,
                height:292
            },
            {
                stampTitle:"Urgent",
                url:"./resources/stamps/Urgent.png",
                width:589,
                height:274
            }
    
        ],
        /*
         *  -- OTHER -- 
         */    

        /**
         * @member {boolean} delayFirstPageLoad Normally, VirtualViewer requests the first page image and the document model
         * in parallel, which results in a faster document load. This may result in more server load if the requested document
         * is a Microsoft Office format and is not yet in the cache. Set this value to true in order to delay requesting any page images
         * until the document model has finished loading. This may cause slightly worse load performance across the board,
         * but will prevent redundant server work when processing Office documents.
         * @memberof vvConfig
         */
        delayFirstPageLoad: false,
        
        /**
         * @member {number} maximumTimeoutsOnDocument If an operation on a document times out, or a stuck thread
         * is ended on the server, VirtualViewer increments a count on that document. If the 
         * count gets as high as the maximumTimeoutsOnDocument value, the document will be closed.
         * @memberof vvConfig
         */
        maximumTimeoutsOnDocument: 3,
        
        /**
         * @member {boolean} disableUserPreferences This is a high-level option, on whether to enable User Preferences at all, not just hiding the
         * toolbar button. If this is enabled, User Preferences UI will not appear, and config values will not be available to change.
         * @memberof vvConfig
         */
        disableUserPreferences: false,

        /**
         * @member {boolean} disableToolbarHamburger This disables the Hamburger sizing of the toolbars if true.
         * If false, it will shrink the toolbar down to hamburger at about 400px.
         * @memberof vvConfig
         */
        disableToolbarHamburger: false,
        
        /**
         * @member {number} midHorizontalThreshold This allows the user to set a window width at which the toolbar buttons collapse into groups when the window is resized
         * @memberOf vvConfig
         */
        windowHorizontalThreshold: 1200,
        
        
        /**
         * @member {number} midVerticalThreshold This allows the user to set a a window height at which the vertical toolbar buttons collapse into groups when the window is resized
         * @memberof vvConfig
         */
        windowVerticalThreshold: 750,
       
        /**
         * @member {object} disableErrorModals This is an object that stores many booleans, each one related to a set of error modals.
         * If true, then modals will not pop up for the selected modals. 
         * NOTE: server and client are hammer options and should probably not be used unless you want to disable EVERYTHING from that origin.
         * @property {boolean} server Disable all modals originating from the server
         * @property {boolean} client Disable all modals originating from the client
         * @property {boolean} adminDisabled Disable all modals that tell the users that the administrator blocked this action
         * @property {boolean} annotations Disable all modals originating from annotations
         * @property {boolean} bookmark Disable all modals originating from Bookmars
         * @property {boolean} cropBlock Disable all modals originating from cropping
         * @property {boolean} documentNotFound Disable modals telling the user that a document was not found
         * @property {boolean} export Disable modals telling the user that an export operation failed
         * @property {boolean} IEImageLoadError Disable all modals originating from IE
         * @property {boolean} imageFailedToLoad Disable all modals originating from the image failing to load
         * @property {boolean} media Disable all modals originating from media errors, for example video and audio playback
         * @property {boolean} pageLimit Disable all modals originating from hitting a page limit
         * @property {boolean} pageManipulation Disable all modals originating from cut/copy/paste
         * @property {boolean} print Disable all modals originating from printing
         * @property {boolean} splitScreen Disable all modals originating from split screen
         * @property {boolean} tabs Disable all modals originating from document tabs
         */
        disableErrorModals:{
            server:false,
            client:false,
            adminDisabled:false,
            annotations:false,
            bookmark:false,
            cropBlock:false,
            documentNotFound:false,
            export:false,
            IEImageLoadError:false,
            imageFailedToLoad:false,
            media:false,
            pageLimit:false,
            pageManipulation:false,
            print:false,
            splitScreen:false,
            tabs:false,
            stamp:false
        },
        
        /**
         * @member {boolean} disableRedactionWarningDialog Disable the redaction warning dialog that users see when first 
         * attempting to draw a redaction. Please read the following before 
         * changing this setting.<br/><br/>
         * 
         * Creating a Redacted Version<br/><br/>
         * 
         * When marking an area for redaction on a document, the underlying text 
         * will remain visible, searchable and accessible to all users if viewed 
         * within the original document. Redactions are permanently applied only 
         * when saving, emailing or exporting to a new document with 
         * "Burn Redactions (Permanent)" selected. <br/><br/>
         * 
         * Search and Redact<br/><br/>
         * 
         * Any textual content selected for redaction in images (or non-text 
         * line art) within a document needs to be redacted MANUALLY following 
         * a visual search. The manual redaction option found in the Annotation 
         * Toolbar should be used. As above, redactions in such cases are 
         * permanently applied only when exporting, emailing or saving with 
         * "Burn Redactions (Permanent)" selected.<br/><br/>
         * 
         * Visual Verification<br/><br/>
         * Before saving or exporting a redacted version of the document, visual 
         * confirmation is strongly recommended to ensure all expected content 
         * has been identified and marked for redaction.
         * 
         * @memberof vvConfig
         */
        disableRedactionWarningDialog: false,

        /**
         * @member {boolean} enableSaveOverwriteWarning Enable overwrite warning if saving will change the original document's format to
         * TIFF or PDF. That may occur if a non-PDF or non-TIFF undergoes page manipulations or other image modifications. If this is set,
         * the viewer will display a dialog to alert the user to the change to their document.
         * @memberof vvConfig
         */
        enableSaveOverwriteWarning: true,
    
        /**
         * @member {boolean} enableAdvancedSaveMenu Enable a dropdown menu for save that allows burning in redactions and annotations. 
         * If this is enabled, reloadOnSave should also be set to true.
         * @memberof vvConfig
         */
        enableAdvancedSaveMenu: false,
    
        /**
         * @member {boolean} enabledAdvancedSaveWarning If true, and {@link vvConfig.enableAdvancedSaveMenu} is true as well, the viewer
         * will warn the user about making permanent changes to the original document.
         * @memberof vvConfig 
         */
        enabledAdvancedSaveWarning: true,
       
        /**
         * @member {boolean} reloadDocumentOnSave Reload the document model after a save. This is particularly helpful if the content handler
         * generates a new ID for a saved document, for instance if using versioning.
         * @memberof vvConfig
         */
        reloadDocumentOnSave: false,
    
        /**
         * @member {boolean} unsavedChangesNotification If the user attempts to close a tab or browser tab that contains an unsaved document,
         * the viewer will pop up a warning if this is set to true.
         * @memberof vvConfig
         */
        unsavedChangesNotification : true,

        // Disables the sending of events to the server (pageEvent, emailEvent, printEvent, etc)
        /**
         * @member {boolean} enableEventNotification Enable or disable event notification, which is when the viewer
         * sends notifications to the server on certain events like pageEvent, emailEvent, printEvent, and more.
         * @memberof vvConfig
         */
        enableEventNotification: true,

        /**
         * @member {boolean} enableSaveNotification If this is set, the viewer will display a notification that a document is currently being
         * saved.
         * @memberof vvConfig
         */
        enableSaveNotification: true,

        /**
         * @member {vvDefines.multipleDocModes} multipleDocMode The viewer can retrieve a list of documents in several ways. If the document 
         * thumbnail tab is enabled, those documents will display as thumbnails.
         * @memberof vvConfig
         */
        multipleDocMode: vvDefines.multipleDocModes.availableDocuments,

        // 
        /**
         * @member {number} panIncrement Define how far, in pixels, to pan for each arrow press.
         * @memberof vvConfig
         */
        panIncrement: 30,
    
        /**
         * @member {boolean} enableSVGSupport Certain formats may be rendered and loaded into the viewer as SVG images. This setting
         * determines whether the viewer attempts to load those formats as SVGs, or whether it loads all images as bitmaps.
         * @see VirtualViewer#resetSVGSupport
         * @memberof vvConfig
         */
        enableSVGSupport: true,
    
        /**
         * @member {boolean} enableSVGSupportForIE Specifically enable or disable SVG support for Internet Explorer. It may be desirable to 
         * disable SVG support for Internet Explorer if the viewer is experiencing frequent errors. Contact Snowbound support to 
         * determine if this is a good option.
         * @see vvConfig.enableSVGSupport
         * @memberof vvConfig
         */
        enableSVGSupportForIE: true,

        /**
         * @member {boolean} enableSVGSupportForIE Specifically enable or disable SVG support for Microsoft Edge. It may be desirable to 
         * disable SVG support for Edge if the viewer is experiencing frequent errors. Contact Snowbound support to 
         * determine if this is a good option.
         * @see vvConfig.enableSVGSupport
         * @memberof vvConfig
         */        
        enableSVGSupportForEdge: false,
    
        // enables consolidation of the layers and creates Master Layer.
        /**
         * @member {boolean} enableConsolidateAnnotationLayer Enable or disable the layer consolidation feature. This feature allows
         * a user to copy all annotations into a single, new Master Layer.
         * @see vvConfig.consolidateLayerName
         * @memberof vvConfig
         */
        enableConsolidateAnnotationLayer: false,
        /**
         * @member {string} consolidateLayerName The name of the new layer that annotations have been consolidated into.
         * @see vvConfig.enableConsolidateAnnotationLayer
         * @memberof vvConfig
         */
        consolidateLayerName: "Master Layer",
    
        /**
         * @member {boolean} enableCrop Enable the crop tool. Note that cropped images will always be saved as bitmap, rather than vector,
         * images and may have their format overwritten.
         * @memberof vvConfig
         */
        enableCrop: true,
            
        /**
         * @member {boolean} disableRecentlyViewedCookien This setting will not save or load the display
         * names cookie at all if true.
         * @memberof vvConfig
         */
        disableRecentlyViewedCookie: false,
        
        /**
         * @member {boolean} preferServerDisplayName This setting will preferentially load display names from the server, 
         * rather than the recently-viewed documents cookie. With cache configuration
         * on the server side, this setting will allow a content handler to update 
         * a document's display name.
         * @memberof vvConfig
         */
        preferServerDisplayName: false,
    
        /**
         * @member {object} emailDefaults Default options to populate the Email dialog. Many of these can also be set in web.xml or web.config; to
         * these properties should be set to null or undefined to fall through to the server-side defaults.
         * @property {string} emailDefaults.prepopulateFrom The default "From" email address.
         * @property {string} emailDefaults.prepopulateTo A default "To" email address, or multiple addresses separated by commas.
         * @property {string} emailDefaults.prepopulateCC A default CC email address, or multiple addresses separated by commas.  
         * @property {string} emailDefaults.prepopulateBCC A default BCC email address, or multiple addresses separated by commas.
         * @memberof vvConfig
         */
        emailDefaults: {
            prepopulateFrom: "prepopulatedEmail@domain.com",
            prepopulateTo : "",
            prepopulateCC : "",
            prepopulateBCC : ""
        },
    
        /**
         * @member {object} magnifierDefaults Defaults for the magnifier feature.
         * @property {number} magnifierDefaults.zoomPercent How much the magnifier will zoom the document underneath it.
         * @property {number} magnifierDefaults.width The width of the magnifier box.
         * @property {number} magnifierDefaults.height The height of the magnifier box.
         * @property {number} magnifierDefaults.x The starting X position of the magnifier.
         * @property {number} magnifierDefaults.y The starting Y position of the magnifier.
         * @memberof vvConfig
         */
        magnifierDefaults: {
            zoomPercent: 150,
            width: 300,
            height:150,
            x:200,
            y:100
        },
    
        /**
         * @member {boolean} doNotLoadPageThumbs If set to true, the viewer will never request any page thumbnail images
         * and display HTML placeholders instead. {@link vvConfig.displayThumbFooters} is a helpful option to enable alongside this
         * setting.
         * @see vvConfig.displayThumbFooters
         * @memberof vvConfig
         */
        doNotLoadPageThumbs: false,

        /**
         * @member {boolean} displayThumbFooters If set to true, thumbnails will appear with a small footer. For page thumbnails, 
         * the page number will be displayed; for document thumbnails, the display name will appear in the footer.
         * @memberof vvConfig
         */
        displayThumbFooters: false,

        /**
         * @member {boolean} autoResizeTextAnnotations If set to true, text annotations will automatically resize as the user types. To update
         * live, set {@link vvConfig.autoConfirmTextAnnotations} to true; otherwise, the text annotation will resize when the text changes are 
         * confirmed.
         * @see vvConfig.autoResizeStickyNoteAnnotations
         * @see vvConfig.autoConfirmTextAnnotations
         * @memberof vvConfig
         */
        autoResizeTextAnnotations: false,

        /**
         * @member {boolean} autoResizeStickyNoteAnnotations If set to true, sticky note annotations will automatically resize as the user 
         * types. To update live, set {@link vvConfig.autoConfirmTextAnnotations} to true; otherwise, the sticky note annotation will 
         * resize when the text changes are confirmed.
         * @see vvConfig.autoResizeTextAnnotations
         * @see vvConfig.autoConfirmTextAnnotations
         * @memberof vvConfig
         */
        autoResizeStickyNoteAnnotations: false,
    
        // The following three help parameters are passed to window.open when
        // creating the help window.
        // window.open(helpURL,helpWindowName,helpWindowParams);
        // This can be (and often should be) a relative URL Path
        /**
         * @member {string} helpURL This URL is passed to window.open when creating the help window. 
         * This can be (and often should be) a relative URL path to an internal help page.
         * @see vvConfig.helpWindowName
         * @see vvConfig.helpWindowParams
         * @memberof vvConfig
         */ 
        helpURL: "http://www.snowbound.com/support/manuals",
        /**
         * @member {string} helpWindowName This window name is passed to window.open when creating the help window.
         * @see vvConfig.helpURL
         * @see vvConfig.helpWindowParams
         * @memberof vvConfig
         */ 
        helpWindowName: "helpWindow",
        /**
         * @member {string} helpWindowParams These comma-separated parameters are passed to window.open when creating the help window.
         * @see vvConfig.helpURL
         * @see vvConfig.helpWindowName
         * @memberof vvConfig
         */ 
        helpWindowParams: "scrollbars=1,width=800,height=600",
        
        /*
         * @member {number} canvasBufferSpace The amount of configurable buffer space around the canvas. This number should be under 20.
         * @memberof vvConfig
         */
        canvasBufferSpace: 10
        };

    return vvConfig;
});
