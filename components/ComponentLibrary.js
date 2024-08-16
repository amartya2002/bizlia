import { useStore } from '../store/useStore'
import { componentRegistry } from '../utils/componentRegistry'

export default function ComponentLibrary() {
  const addComponent = useStore(state => state.addComponent)

  return (
    <div className="w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Components</h2>
      {Object.entries(componentRegistry).map(([name, component]) => (
        <button
          key={name}
          onClick={() => addComponent(name)}
          className="block w-full text-left p-2 mb-2 bg-zinc-800 rounded"
        >
          {name}
        </button>
      ))}
    </div>
  )
}