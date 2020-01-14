import React from 'react';


export default class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.viewerRef = React.createRef();
    // this.backend = new props.backend();
}

  componentDidMount() {
    const { src } = this.props;
    const element = this.viewerRef.current;
    // console.log(element);
    // this.backend(src, element);
    const iframe = document.createElement('iframe');
      iframe.src = `/pdf_viewer/web/viewer.html?file=${src}`;
      iframe.width = '100%';
      iframe.height = '100%';
      // console.log(element); 
      if(element != null){
        element.appendChild(iframe);
      }
  }
  
  render() {
    return (
        
      <div ref={this.viewerRef} id='viewer' style={{ width: '100%', height: '100%' }}>

      </div>
    )
  }
}