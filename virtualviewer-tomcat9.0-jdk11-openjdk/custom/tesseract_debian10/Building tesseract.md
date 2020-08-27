1. Create a Debian 10 VM
2. Install required packages to compile
   - `apt install g++ autoconf automake libtool pkg-config libpng-dev libjpeg62-turbo-dev libtiff5-dev zlib1g-dev ca-certificates git libtool libleptonica-dev make pkg-config`
3. Clone the tesseract repository
   - `git clone https://github.com/tesseract-ocr/tesseract.git`
   - `cd tesserect`
   - `git checkout 4.1.1`
4. Configure the package
   - `./autogen.sh`
   - `./configure`
5. Build
   - `make`
6. If you are going to run tesseract on THIS machine, install
   - `sudo make install`
7. If you are going to use this output on an `AMD64` Docker container, assemble the output
   - `mkdir ~/snowbound_tesseract`
   - `cp ./src/api/.libs/tesseract ~/snowbound_tesseract`
   - `cp ./src/api/.libs/libtesseract.so.4.0.1 ~/snowbound_tesseract/libtesseract.so.4.0.1`
   - `mkdir ~/snowbound_tesseract/tessdata`
   - `cp -r tessdata/configs/ ~/snowbound_tesseract/tessdata/`
   - `rm ~/snowbound_tesseract/tessdata/configs/Makefile*`
   - `cp -r tessdata/tessconfigs/ ~/snowbound_tesseract/tessdata/`
   - `rm ~/snowbound_tesseract/tessdata/tessconfigs/Makefile*`
   - `cp tessdata/pdf.ttf ~/snowbound_tesseract/tessdata/`
8. Copy any training data (`*.traineddata`) from Snowbounds tessdata repo into `~/snowbound_tesseract/tessdata/`
9. Copy the directory `~/snowbound_tesseract` to the host that you are building the container on
10. In the `Dockerfile` run the following commands
    - COPY snowbound_tesseract/libtesseract.so.4.0.1 /usr/lib/x86_64-linux-gnu/libtesseract.so.4.0.1
    - RUN ln -s /usr/lib/x86_64-linux-gnu/libtesseract.so.4.0.1 /usr/lib/x86_64-linux-gnu/libtesseract.so
    - RUN ln -s /usr/lib/x86_64-linux-gnu/libtesseract.so.4.0.1 /usr/lib/x86_64-linux-gnu/libtesseract.so.4
    - COPY snowbound_tesseract/tessdata /usr/local/share/tessdata