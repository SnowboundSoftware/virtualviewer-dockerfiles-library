/* 
 * This file, loaded in a script tag by the viewer, is the recommended location for
 * custom code. This file may be overwritten and the sample functions removed.
 */


/* 
 * The following conditional ensures that the sample function will not overwrite
 * any existing function definitions. The conditional may be removed if this file is
 * used for implementation.
 */
if (typeof beforeVirtualViewerInit !== "function") {
    
    /**
    * This function may be modified to inject custom code into VirtualViewer initialization.
    * It is called after the object virtualViewer--which contains all viewer state
    * information, and all public API--is created, but before the virtualViewer object
    * is initialized. 
    * 
    * At this point in initialization, the global variable virtualViewer is set to 
    * the main VirtualViewer instance. However, since it has not yet been initialized,
    * most functionality and API, including virtualViewer.setCallback, will not
    * yet be operational until initialization is complete.
    * 
    * If this function is not defined, or if initialization is not performed within 
    * this function, VirtualViewer will call its default initialization API, 
    * virtualViewer.initViaURL. If initialization is performed within this function,
    * VirtualViewer will not call additional initialization API.
    * 
    * This function is not expected to have a return. VirtualViewer will detect
    * whether initialization has been performed; perform initialization if necessary;
    * and call afterVirtualViewerInit once initialization is complete. 
    * 
    * However, the function may return a value of "true" to actively cancel further initialization.
    * If it returns false, or nothing, VirtualViewer will auto-detect whether initialization
    * has occurred.
    * 
    * @public
    */
    function beforeVirtualViewerInit() {
        // For example, to open VirtualViewer with specified documents, set the config.js parameter,
        // and modify the following snippet of code:

        // var mySpecifiedDocuments = ["image.jpeg", "help.doc"];
        // virtualViewer.initSpecifiedDocuments(mySpecifiedDocuments);        
    };
}

/* 
 * The following conditional ensures that the sample function will not overwrite
 * any existing function definitions. The conditional may be removed if this file is
 * used for implementation.
 */
if (typeof afterVirtualViewerInit !== "function") {
    /**
     * This function may be modified to inject custom code into VirtualViewer initialization.
     * It is called after the object virtualViewer is fully initialized, whether that
     * is by the default API initViaURL or by custom code within beforeVirtualViewerInit.
     * 
     * This function is the recommended injection point for setting callback handlers.
     * 
     * @public
     */
    function afterVirtualViewerInit() { 
        // This function will be called once initialization of virtualViewer has been finished.
    };
}