import { useStore } from '../store/useStore'
import { generateCode } from '../utils/codeGenerator'

export default function CodePreview() {
  const components = useStore(state => state.components)
  const code = generateCode(components)

  return (
    <div className="h-64 p-4 bg-gray-800 text-white overflow-auto">
      <pre>{code}</pre>
    </div>
  )
}