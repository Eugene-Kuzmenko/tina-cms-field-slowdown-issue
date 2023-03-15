import React, { useEffect, useState } from 'react';
import { useCMS, useForm, usePlugin, TinaCMS } from 'tinacms';
import { TinaEditProvider, useEditState } from 'tinacms/dist/edit-state';
import './App.css'
import { CMS_CONFIG } from './cmsConfig';

interface TestFormData {
  bgColor: string,
}

const GoToEdit = () => {
  const { setEdit } = useEditState();
  useEffect(() => {
    setEdit(true);
  }, [])
  return <div>Going into edit mode</div>
}

function App() {
  const [formData, form] = useForm<TestFormData>(CMS_CONFIG);
  usePlugin(form);

  return (
    <div className="App">
      <TinaEditProvider showEditButton editMode={
        <div className="content" style={{ backgroundColor: formData.bgColor }}>
          {formData.bgColor}
        </div>
      }>
        <GoToEdit />
      </TinaEditProvider>
    </div>
  )
}

export default App
