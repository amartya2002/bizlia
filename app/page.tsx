'use client'

import { useStore } from '../store/useStore'
import ComponentLibrary from '../components/ComponentLibrary'
import Canvas from '../components/Canvas'
import PropertyEditor from '../components/PropertyEditor'
import CodePreview from '../components/CodePreview'

export default function Home() {
  const { undo, redo } = useStore()

  return (
    <div className="flex h-screen">
      <ComponentLibrary />
      <div className="flex flex-col flex-grow">
        <div className="flex p-2 gap-2 bg-white">
          <button onClick={undo} className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-black">Undo</button>
          <button onClick={redo} className="px-3 py-1 bg-zinc-800 text-white rounded text-sm hover:bg-black">Redo</button>
        </div>
        <div className="flex flex-grow">
          <Canvas />
          <PropertyEditor />
        </div>
        <CodePreview />
      </div>
    </div>
  )
}