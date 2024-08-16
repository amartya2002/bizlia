export const componentRegistry = {
    Button: {
      component: ({ children, onClick }) => (
        <button onClick={onClick} className="px-4 py-1.5 bg-red-500 text-white rounded">
          {children}
        </button>
      ),
      props: {
        children: { type: 'string', default: 'Click me' },
        onClick: { type: 'function', default: () => {} }
      }
    },
    Card: {
      component: ({ title, content }) => (
        <div className="p-4 bg-white border rounded">
          <h2 className="text-black">{title}</h2>
          <p className="text-red-500">{content}</p>
        </div>
      ),
      props: {
        title: { type: 'string', default: 'Card Title' },
        content: { type: 'string', default: 'Card content' }
      }
    }
  }