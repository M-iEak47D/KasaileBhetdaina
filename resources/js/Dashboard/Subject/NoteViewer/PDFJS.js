const PDFJs = (src,element) => {
    const iframe = document.createElement('iframe');
    iframe.src = `/pdf_viewer/web/viewer.html?file=${src}`;
    iframe.width = 'auto%';
    iframe.height = 'auto%';
    // console.log(element); 
    if(element != null){
      element.appendChild(iframe);
    }
  }

export default PDFJs;