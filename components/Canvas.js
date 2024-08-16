import { useStore } from '../store/useStore'
import RenderedComponent from './RenderedComponent'

export default function Canvas() {
  const { components, selectComponent } = useStore()

  return (
    <div className="flex-grow p-4 bg-zinc-400">
      {components.map(component => (
        <div key={component.id} onClick={() => selectComponent(component.id)}>
          <RenderedComponent type={component.type} props={component.props} />
        </div>
      ))}
    </div>
  )
}