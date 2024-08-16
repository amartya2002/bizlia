import { componentRegistry } from '../utils/componentRegistry'

export default function RenderedComponent({ type, props }) {
  const Component = componentRegistry[type].component
  return <Component {...props} />
}