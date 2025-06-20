import React, { ComponentProps } from 'react'

type ComponentsType = {
  h1: React.FC<ComponentProps<'h1'>>
  h2: React.FC<ComponentProps<'h2'>>
  p: React.FC<ComponentProps<'p'>>
  code: React.FC<ComponentProps<'code'>>
  pre: React.FC<ComponentProps<'pre'>>
  a: React.FC<ComponentProps<'a'>>
  ul: React.FC<ComponentProps<'ul'>>
  ol: React.FC<ComponentProps<'ol'>>
  blockquote: React.FC<ComponentProps<'blockquote'>>
}

export const components: ComponentsType = {
  h1: props => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: props => <h2 className="text-3xl font-semibold my-3" {...props} />,
  p: props => <p className="my-2 leading-relaxed" {...props} />,
  code: props => <code className="bg-gray-100 px-1 rounded" {...props} />,
  pre: props => <pre className="bg-gray-100 p-4 rounded my-4 overflow-auto" {...props} />,
  a: props => <a className="text-blue-600 hover:underline" {...props} />,
  ul: props => <ul className="list-disc list-inside my-4" {...props} />,
  ol: props => <ol className="list-decimal list-inside my-4" {...props} />,
  blockquote: props => (
    <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic" {...props} />
  )
}