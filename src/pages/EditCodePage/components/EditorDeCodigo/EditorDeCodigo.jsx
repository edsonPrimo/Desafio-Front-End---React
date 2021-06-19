import React, { useContext, useState, useRef } from 'react';
import hljs from 'highlight.js'
import useCodeEditorContext from '../../../../hooks/CodeEditorContext';
import { MdPhotoCamera } from 'react-icons/md'
import * as htmlToImage from 'html-to-image';
import './style.scss'
import './dracula.css'

function EditorDeCodigo() {

  const { language, projectColor } = useCodeEditorContext()
  const codeRef = useRef()

  const highlight = (e) => {
    const codeElement = e.target.parentNode.previousElementSibling.children[0]
   
    codeElement.classList = []
    codeElement.classList.add(`preview`, language)
    hljs.highlightElement(codeElement)
  }

  const exportJPG = (e) => {
    htmlToImage.toJpeg(codeRef.current)
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'meu-projeto.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <section className="code-editor">
      <div className="code-editor__container" id="capture" style={{ background: projectColor }} ref={codeRef}>
        <code className="preview hljs" contentEditable="true" aria-label="editor" data-conteudo></code>
        <button className="code-editor__svg" onClick={exportJPG} ><MdPhotoCamera color="white" opacity='0.5' size="30px" /></button>
      </div>
      <div>
        <input type="button" className="code-editor__btn botao" onClick={highlight} value="Visualizar com o highlight" />
      </div>
    </section>
  )
}
export default EditorDeCodigo
