define(["require"], function(require) {
    var toolbarConfig = function(virtualViewer) {

        /* 
       * There are a few levels of button configuration. First, there are the toolbars themselves. The object "imageToolbarButtons" describes the top toolbar, 
       * and contains functionality like save, rotate, look at information, etc. The object "annotationToolbarButtons" describes the toolbar on the left side
       * of the screen, which holds annotation and watermarks buttons. Any button configuration placed outside of these two objects will be disregarded. The
       * names "imageToolbarButtons" and "annotationToolbarButtons" should NOT be changed. These are baked into how the VirtualViewer functions.
       * 
       * On the next level of granularity, we have the item "toolbarButtonLogicalGroups". Again, do not change the name of this item. Each item in this list
       * represents a group of toolbar buttons. For instance, the zoom group contains all zoom and fit buttons. On the largest size of the viewer, this
       * simply means that whitespace will visually separate this group from other groups. As the viewer shrinks, this group is the dropdown menu that all
       * its buttons will collapse into. These groups will appear onscreen in the order they appear here. 
       * 
       * Each logical group has a key, which will represent it in the DOM. Changing the key will cause unexpected behavior. The object that follows the key
       * contains all the necessary configuration for the group. 
       * 
       * Finally, we have the individual buttons. Similarly to the logical groups, each button has a key, which will serve as its name in the rest of 
       * VirtualViewer's functionality. Each button appears in the order it is listed, within its logical group. If a button does not have a logical group,
       * it will appear at the end of the toolbar.
       * 
       */



        /* DO NOT MODIFY the id field of existing Snowbound toolbar buttons, as this will interfere with normal button functionality and may cause errors.
         * Other aspects of the buttons may be modified.
         */
        var imageToolbarButtons = {
            //This is a sample button to show how to add your own custom buttons. The same format can be added to annotationToolbarButtons to appear in
            //the left toolbar.
            //"myCustomButton": { name: "My Button Tooltip", iconImage: "path/to/icon.png", clickHandler: function () { alert('Hello World'); }, groupId: "vvFileGroup" },
            "vvSaveDocument": { localizeKey: "utilityToolbar.saveDocument", clickHandler: virtualViewer.saveDocument, groupId: "vvFileGroup" },
            "vvSaveDocumentAs": { localizeKey: "utilityToolbar.saveDocumentAs", clickHandler: virtualViewer.saveDocumentAsDialog, groupId: "vvFileGroup" },
            "vvFileUpload": { localizeKey: "utilityToolbar.uploadDocument", clickHandler: virtualViewer.showUploadLocalFileDialog, groupId: "vvFileGroup", addSeparatorAfter: true },
            "vvExportDocument": { localizeKey: "utilityToolbar.exportDocument", clickHandler: virtualViewer.exportDocumentDialog, groupId: "vvFileGroup" },
            "vvEmailDocument": { localizeKey: "utilityToolbar.emailDocument", clickHandler: virtualViewer.emailDocumentDialog, groupId: "vvFileGroup" },
            "vvPrint": { localizeKey: "utilityToolbar.printDocument", clickHandler: virtualViewer.printDocumentDialog, groupId: "vvFileGroup" },
            "vvZoomIn": { localizeKey: "utilityToolbar.zoomIn", clickHandler: virtualViewer.zoomIn, groupId: "vvZoomGroup" },
            "vvZoomOut": { localizeKey: "utilityToolbar.zoomOut", clickHandler: virtualViewer.zoomOut, groupId: "vvZoomGroup" },
            "vvRubberbandZoom": { localizeKey: "utilityToolbar.rubberbandZoom", clickHandler: virtualViewer.zoomRubberband, groupId: "vvZoomGroup" },
            "vvMagnify": { localizeKey: "utilityToolbar.magnifier", clickHandler: virtualViewer.toggleMagnifier, groupId: "vvZoomGroup", addSeparatorAfter: true },
            "vvFitWindow": { localizeKey: "utilityToolbar.fitToWindow", clickHandler: virtualViewer.fitWindow, groupId: "vvZoomGroup" },
            "vvFitHeight": { localizeKey: "utilityToolbar.fitToHeight", clickHandler: virtualViewer.fitHeight, groupId: "vvZoomGroup" },
            "vvFitWidth": { localizeKey: "utilityToolbar.fitToWidth", clickHandler: virtualViewer.fitWidth, groupId: "vvZoomGroup" },
            "vvGoToFirstPage": { localizeKey: "utilityToolbar.goToFirstPage", clickHandler: virtualViewer.firstPage, groupId: "vvPagesGroup" },
            "vvGoToPreviousPage": { localizeKey: "utilityToolbar.goToPreviousPage", clickHandler: virtualViewer.previousPage, groupId: "vvPagesGroup" },

            "vvJumpToPage": { localizeKey: "utilityToolbar.jumpToPage", groupId: "vvPagesGroup" },

            "vvGoToNextPage": { localizeKey: "utilityToolbar.goToNextPage", clickHandler: virtualViewer.nextPage, groupId: "vvPagesGroup" },
            "vvGoToLastPage": { localizeKey: "utilityToolbar.goToLastPage", clickHandler: virtualViewer.lastPage, groupId: "vvPagesGroup" },

            "vvRotatePageRight": { localizeKey: "utilityToolbar.rotateRight", clickHandler: virtualViewer.rotateClock, groupId: "vvPageManipGroup" },
            "vvRotatePageLeft": { localizeKey: "utilityToolbar.rotateLeft", clickHandler: virtualViewer.rotateCounter, groupId: "vvPageManipGroup" },

            "vvPictureControls": { localizeKey: "utilityToolbar.pictureControls", clickHandler: virtualViewer.showPictureControlsDialog, groupId: "vvPageManipGroup", subgroup: 1 },
            "vvCrop": { localizeKey: "utilityToolbar.crop", clickHandler: virtualViewer.cropPageButton, groupId: "vvPageManipGroup" },
            "vvImageInfo": { localizeKey: "utilityToolbar.toggleImageInfo", clickHandler: virtualViewer.toggleImageInfo, groupId: "vvInfoGroup" },
            "vvAbout": { localizeKey: "utilityToolbar.showAboutDialog", clickHandler: virtualViewer.showAboutDialog, groupId: "vvInfoGroup" },
            "vvUserPreferences": { localizeKey: "utilityToolbar.showUserPreferencesDialog", clickHandler: virtualViewer.showUserPreferencesDialog, groupId: "vvInfoGroup" },
            "vvSpeechSynthesis": { localizeKey: "utilityToolbar.toggleSpeechControls", clickHandler: virtualViewer.toggleSpeechControls, groupId: "vvInfoGroup" },
            "vvToggleFullScreen": { localizeKey: "utilityToolbar.toggleFullScreen", clickHandler: toggleFullScreen, groupId: ""}
        };

        var annotationToolbarButtons = {
            "vvAnnStickyNote": { localizeKey: "annToolbar.stickyNote", annType: "Sticky Note", groupId: "vvTextAndStamps" },
            "vvAnnText": { localizeKey: "annToolbar.textEdit", annType: "Rubber Stamp", groupId: "vvTextAndStamps" },
            "vvAnnImageRubberStamp": { localizeKey: "annToolbar.imageRubberStamp", annType: "Bitmap", groupId: "vvTextAndStamps" },
            "vvAnnHighlightRect": { localizeKey: "annToolbar.highlightRectangle", annType: "HighlightRectangle", groupId: "vvMarkup" },
            "vvRedactionRect": { localizeKey: "annToolbar.redactionArea", annType: "RedactionRect", groupId: "vvMarkup", addSeparatorAfter: true },
            "vvAnnLine": { localizeKey: "annToolbar.line", annType: "Line", groupId: "vvMarkup" },
            "vvAnnArrow": { localizeKey: "annToolbar.arrow", annType: "Arrow", groupId: "vvMarkup" },
            "vvAnnFreehand": { localizeKey: "annToolbar.freehand", annType: "Freehand", groupId: "vvMarkup" },
            "vvAnnFilledRect": { localizeKey: "annToolbar.filledRectangle", annType: "FilledRectangle", groupId: "vvShapes" },
            "vvAnnFilledEllipse": { localizeKey: "annToolbar.filledEllipse", annType: "FilledEllipse", groupId: "vvShapes" },
            "vvAnnFilledPolygon": { localizeKey: "annToolbar.filledPolygon", annType: "FilledPolygon", groupId: "vvShapes", addSeparatorAfter: true },
            "vvAnnRect": { localizeKey: "annToolbar.rectangle", annType: "Rectangle", groupId: "vvShapes" },
            "vvAnnEllipse": { localizeKey: "annToolbar.ellipse", annType: "Ellipse", groupId: "vvShapes" },
            "vvAnnPolygon": { localizeKey: "annToolbar.polygon", annType: "Polygon", groupId: "vvShapes" },
            "vvWatermarks": { localizeKey: "annToolbar.createWatermark", clickHandler: virtualViewer.showWatermarksManager, groupId: "vvMiscAnnTools" },
            "vvLayerManager": { localizeKey: "annToolbar.layerManager", clickHandler: virtualViewer.toggleLayerManager, groupId: "vvMiscAnnTools" }
        };

        var toolbarButtonLogicalGroups = {
            // This is a full group object, modifying the collapseThreshold will collapse that group down at the specified value.
            // Any button that is added gets defaulted to the vvMiscTools and vvMiscAnnTools groups.
            // "vvExampleGroup": { groupTitle: "File", localizeKey: "utilityToolbar.fileGroup", collapseThreshold: 1200 },
            "vvFileGroup": { groupTitle: "File", localizeKey: "utilityToolbar.fileGroup"},
            "vvZoomGroup": { groupTitle: "Zoom", localizeKey: "utilityToolbar.zoomGroup"},
            "vvPagesGroup": { groupTitle: "Pages", localizeKey: "utilityToolbar.pagesGroup" },
            "vvPageManipGroup": { groupTitle: "Page Manipulation", localizeKey: "utilityToolbar.pageManipulationGroup" },
            "vvInfoGroup": { groupTitle: "Info and Settings", localizeKey: "utilityToolbar.infoGroup" },
            "vvMiscTools": { groupTitle: "miscellaneous", localizeKey: "utilityToolbar.miscGroup", collapseThreshold: 0 },
            "vvTextAndStamps": { groupTitle: "Text and Stamps", localizeKey: "annToolbar.textAndStampsGroup", annotationToolbar: true },
            "vvMarkup": { groupTitle: "Markup", localizeKey: "annToolbar.markupGroup", annotationToolbar: true },
            "vvShapes": { groupTitle: "Shapes", localizeKey: "annToolbar.shapesGroup", annotationToolbar: true },
            "vvMiscAnnTools": { groupTitle: "miscellaneous", localizeKey: "annToolbar.miscGroup", annotationToolbar: true, collapseThreshold: 0}
        };

        return {
            imageToolbarButtons: imageToolbarButtons,
            annotationToolbarButtons: annotationToolbarButtons,
            toolbarButtonLogicalGroups: toolbarButtonLogicalGroups
        };
    };
    return toolbarConfig;
});
