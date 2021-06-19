import React from 'react';
import EditorDeCodigo from './components/EditorDeCodigo/EditorDeCodigo'
import ProjectOptions from './components/ProjectOptions/ProjectOptions';

import { CodeEditorContextProvider } from '../../hooks/CodeEditorContext';
import './style.scss'

function EditCode() {
  return (
    <section className="editor-codePage">
      <CodeEditorContextProvider>
        <EditorDeCodigo />
        <ProjectOptions />
      </CodeEditorContextProvider>
    </section>

  )
}

export default EditCode