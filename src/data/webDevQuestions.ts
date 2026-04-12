import { Question } from '../types';

export const WEB_DEV_QUESTIONS: Question[] = [
  // ==================== REACT & FRONTEND FRAMEWORKS (Questions 1-15) ====================
  {
    id: 'wd-1',
    type: 'mcq',
    category: 'React Internals',
    text: 'How does React 18\'s Concurrent Rendering differ from the previous synchronous rendering model in terms of the main thread?',
    options: [
      'It uses Web Workers to offload all rendering tasks from the main thread.',
      'It allows React to interrupt a long-running render to handle high-priority events like user input.',
      'It completely removes the need for a Virtual DOM reconciliation phase.',
      'It forces all state updates to be batched into a single microtask regardless of priority.'
    ],
    correctAnswer: 'It allows React to interrupt a long-running render to handle high-priority events like user input.',
    difficulty: 'expert',
    explanation: 'Concurrent Rendering uses time-slicing to pause/resume work; high-priority updates (input) interrupt low-priority (data fetch) via the Scheduler API.'
  },
  {
    id: 'wd-2',
    type: 'mcq',
    category: 'React Patterns',
    text: 'What is the primary purpose of React\'s "useTransition" hook?',
    options: [
      'To animate CSS transitions on DOM elements.',
      'To mark state updates as non-urgent, allowing React to prioritize more important updates.',
      'To transition between different React versions in the same app.',
      'To manage routing transitions between pages.'
    ],
    correctAnswer: 'To mark state updates as non-urgent, allowing React to prioritize more important updates.',
    difficulty: 'advanced',
    explanation: 'useTransition returns [isPending, startTransition]; wrapping state updates in startTransition marks them as low-priority for better UX during heavy renders.'
  },
  {
    id: 'wd-3',
    type: 'mcq',
    category: 'React Performance',
    text: 'When should you use "React.memo" vs "useMemo"?',
    options: [
      'React.memo for components; useMemo for expensive computations within components.',
      'React.memo for functions; useMemo for JSX elements.',
      'They are interchangeable; choose based on preference.',
      'React.memo for class components; useMemo for function components.'
    ],
    correctAnswer: 'React.memo for components; useMemo for expensive computations within components.',
    difficulty: 'advanced',
    explanation: 'React.memo is a higher-order component that memoizes rendered output; useMemo memoizes computed values. Both use shallow comparison by default.'
  },
  {
    id: 'wd-4',
    type: 'mcq',
    category: 'React State Management',
    text: 'What is the key difference between "useReducer" and "useState"?',
    options: [
      'useReducer is only for complex state; useState is only for primitives.',
      'useReducer centralizes state logic via actions/reducers; useState is simpler for independent values.',
      'useReducer works only with class components.',
      'useState cannot handle asynchronous updates.'
    ],
    correctAnswer: 'useReducer centralizes state logic via actions/reducers; useState is simpler for independent values.',
    difficulty: 'intermediate',
    explanation: 'useReducer is ideal for state with multiple sub-values or when next state depends on previous; both can achieve same results but differ in organization.'
  },
  {
    id: 'wd-5',
    type: 'mcq',
    category: 'React Hooks',
    text: 'What does the "dependency array" in useEffect control?',
    options: [
      'Which props the component receives.',
      'When the effect re-runs: empty array = once on mount; with deps = when deps change; no array = after every render.',
      'Which state variables are tracked for re-renders.',
      'The order in which effects execute.'
    ],
    correctAnswer: 'When the effect re-runs: empty array = once on mount; with deps = when deps change; no array = after every render.',
    difficulty: 'intermediate',
    explanation: 'Dependency array tells React which values the effect depends on; missing deps cause stale closures; extra deps cause unnecessary re-runs.'
  },
  {
    id: 'wd-6',
    type: 'mcq',
    category: 'React Server Components',
    text: 'What is the main benefit of React Server Components (RSC)?',
    options: [
      'They run exclusively on the client for faster interactivity.',
      'They allow components to render on the server with zero bundle size impact, accessing backend resources directly.',
      'They replace the need for any client-side JavaScript.',
      'They automatically optimize images and fonts.'
    ],
    correctAnswer: 'They allow components to render on the server with zero bundle size impact, accessing backend resources directly.',
    difficulty: 'expert',
    explanation: 'RSCs execute on server, send serialized result to client; can directly query databases, read files, use server-only packages without bundling.'
  },
  {
    id: 'wd-7',
    type: 'mcq',
    category: 'Vue.js',
    text: 'What is the purpose of Vue\'s "computed" properties vs "methods"?',
    options: [
      'Computed properties are cached based on reactive dependencies; methods run on every render.',
      'Methods are cached; computed properties are not.',
      'They are functionally identical.',
      'Computed properties can only return strings.'
    ],
    correctAnswer: 'Computed properties are cached based on reactive dependencies; methods run on every render.',
    difficulty: 'intermediate',
    explanation: 'Computed properties cache results until dependencies change, improving performance for expensive operations; methods execute on every re-render.'
  },
  {
    id: 'wd-8',
    type: 'mcq',
    category: 'Vue.js',
    text: 'What is the Vue 3 Composition API\'s primary advantage over the Options API?',
    options: [
      'It is mandatory for all Vue 3 applications.',
      'It enables better logic reuse via composables and improved TypeScript inference.',
      'It removes the need for reactive data.',
      'It is faster at runtime.'
    ],
    correctAnswer: 'It enables better logic reuse via composables and improved TypeScript inference.',
    difficulty: 'advanced',
    explanation: 'Composition API groups related logic together (vs scattered in options), enabling reusable composables and better type inference with TypeScript.'
  },
  {
    id: 'wd-9',
    type: 'mcq',
    category: 'Angular',
    text: 'What is Angular\'s "Change Detection Strategy.OnPush"?',
    options: [
      'It disables change detection entirely.',
      'It runs change detection only when @Input references change or events originate from the component.',
      'It forces change detection on every JavaScript event.',
      'It uses Web Workers for change detection.'
    ],
    correctAnswer: 'It runs change detection only when @Input references change or events originate from the component.',
    difficulty: 'advanced',
    explanation: 'OnPush strategy improves performance by skipping components whose inputs haven\'t changed; requires immutable data patterns for reliable detection.'
  },
  {
    id: 'wd-10',
    type: 'mcq',
    category: 'Angular',
    text: 'What is the purpose of Angular\'s "RxJS" integration?',
    options: [
      'To replace TypeScript with a reactive language.',
      'To handle asynchronous operations and event streams using Observables throughout the framework.',
      'To manage component styling reactively.',
      'To compile Angular templates to native code.'
    ],
    correctAnswer: 'To handle asynchronous operations and event streams using Observables throughout the framework.',
    difficulty: 'intermediate',
    explanation: 'Angular uses RxJS Observables for HTTP, forms, routing; operators like map, switchMap enable powerful async composition and cancellation.'
  },
  {
    id: 'wd-11',
    type: 'mcq',
    category: 'State Management',
    text: 'When is "Context API" insufficient for React state management?',
    options: [
      'When managing theme preferences.',
      'When frequent updates cause unnecessary re-renders of consumers, or when complex state logic requires middleware.',
      'When using TypeScript.',
      'When the app has fewer than 10 components.'
    ],
    correctAnswer: 'When frequent updates cause unnecessary re-renders of consumers, or when complex state logic requires middleware.',
    difficulty: 'advanced',
    explanation: 'Context triggers re-renders in all consumers on any value change; for frequent updates or complex logic, use Zustand, Jotai, or Redux with selectors.'
  },
  {
    id: 'wd-12',
    type: 'mcq',
    category: 'State Management',
    text: 'What is "Zustand"\'s advantage over Redux?',
    options: [
      'It requires more boilerplate code.',
      'It provides a simpler API with hooks, no providers needed, and built-in devtools integration.',
      'It only works with class components.',
      'It cannot handle asynchronous actions.'
    ],
    correctAnswer: 'It provides a simpler API with hooks, no providers needed, and built-in devtools integration.',
    difficulty: 'intermediate',
    explanation: 'Zustand uses create() hook for store, supports middleware, selectors, and devtools without Redux\'s boilerplate (actions, reducers, providers).'
  },
  {
    id: 'wd-13',
    type: 'mcq',
    category: 'React Performance',
    text: 'What causes "hydration mismatch" in Next.js/SSR?',
    options: [
      'Using different React versions on server and client.',
      'Server-rendered HTML differs from client initial render, causing React to re-render and lose performance benefits.',
      'Incorrect CSS loading order.',
      'Missing polyfills for older browsers.'
    ],
    correctAnswer: 'Server-rendered HTML differs from client initial render, causing React to re-render and lose performance benefits.',
    difficulty: 'expert',
    explanation: 'Hydration mismatch occurs when server/client renders differ (e.g., due to browser-only APIs, random values); fix with useEffect, suppressHydrationWarning, or dynamic imports.'
  },
  {
    id: 'wd-14',
    type: 'mcq',
    category: 'Frontend Build Tools',
    text: 'What is "Tree Shaking" in modern bundlers?',
    options: [
      'Removing unused CSS selectors.',
      'Eliminating unused ES module exports from the final bundle via static analysis.',
      'Compressing images in the build pipeline.',
      'Shaking the dependency tree to find conflicts.'
    ],
    correctAnswer: 'Eliminating unused ES module exports from the final bundle via static analysis.',
    difficulty: 'advanced',
    explanation: 'Tree shaking requires ES modules (import/export); bundlers like Webpack/Rollup analyze imports to exclude unused code, reducing bundle size.'
  },
  {
    id: 'wd-15',
    type: 'mcq',
    category: 'Frontend Build Tools',
    text: 'What is the purpose of "Code Splitting" in React applications?',
    options: [
      'Splitting CSS into separate files.',
      'Loading JavaScript chunks on-demand to reduce initial bundle size and improve load time.',
      'Dividing components into separate Git repositories.',
      'Splitting the build process across multiple machines.'
    ],
    correctAnswer: 'Loading JavaScript chunks on-demand to reduce initial bundle size and improve load time.',
    difficulty: 'intermediate',
    explanation: 'Code splitting uses dynamic import() with React.lazy/Suspense to load route/component chunks only when needed, improving First Contentful Paint.'
  },

  // ==================== JAVASCRIPT & TYPESCRIPT DEEP DIVE (Questions 16-30) ====================
  {
    id: 'wd-16',
    type: 'mcq',
    category: 'JavaScript Internals',
    text: 'What is the "Event Loop" in JavaScript?',
    options: [
      'A loop that processes for...of statements.',
      'The mechanism that handles asynchronous callbacks by pushing them from the task/microtask queues to the call stack.',
      'A debugging tool for tracking event listeners.',
      'The iteration over DOM events.'
    ],
    correctAnswer: 'The mechanism that handles asynchronous callbacks by pushing them from the task/microtask queues to the call stack.',
    difficulty: 'advanced',
    explanation: 'Event Loop continuously checks call stack; if empty, pushes microtasks (Promises) then macrotasks (setTimeout) from their respective queues.'
  },
  {
    id: 'wd-17',
    type: 'mcq',
    category: 'JavaScript Closures',
    text: 'What is a "Closure" in JavaScript?',
    options: [
      'A function that cannot be called externally.',
      'A function that retains access to variables from its outer lexical scope, even after the outer function has returned.',
      'A syntax for closing HTML tags.',
      'A method to close browser tabs programmatically.'
    ],
    correctAnswer: 'A function that retains access to variables from its outer lexical scope, even after the outer function has returned.',
    difficulty: 'intermediate',
    explanation: 'Closures enable data privacy, currying, and module patterns; the inner function \"remembers\" the environment where it was created.'
  },
  {
    id: 'wd-18',
    type: 'mcq',
    category: 'JavaScript Prototypes',
    text: 'What is the difference between "__proto__" and "prototype"?',
    options: [
      'They are identical and interchangeable.',
      '__proto__ is an accessor property on instances pointing to constructor\'s prototype; prototype is a property on constructors for new instances.',
      'prototype is for classes only; __proto__ is for functions only.',
      '__proto__ is deprecated and should never be used.'
    ],
    correctAnswer: '__proto__ is an accessor property on instances pointing to constructor\'s prototype; prototype is a property on constructors for new instances.',
    difficulty: 'expert',
    explanation: 'prototype exists on constructor functions; __proto__ (or Object.getPrototypeOf) accesses the internal [[Prototype]] link; prefer Object.getPrototypeOf over __proto__.'
  },
  {
    id: 'wd-19',
    type: 'mcq',
    category: 'TypeScript Types',
    text: 'What is the difference between "interface" and "type" in TypeScript?',
    options: [
      'They are completely different and cannot be used interchangeably.',
      'Both define types; interfaces support declaration merging and extends; types support unions, intersections, and mapped types.',
      'interface is for objects only; type is for primitives only.',
      'type is deprecated in favor of interface.'
    ],
    correctAnswer: 'Both define types; interfaces support declaration merging and extends; types support unions, intersections, and mapped types.',
    difficulty: 'intermediate',
    explanation: 'Prefer interface for object shapes (extends, declaration merging); use type for unions, intersections, tuples, and advanced type manipulations.'
  },
  {
    id: 'wd-20',
    type: 'mcq',
    category: 'TypeScript Generics',
    text: 'What is the purpose of "Generic Constraints" in TypeScript?',
    options: [
      'To prevent generics from being used in production.',
      'To restrict type parameters to a specific set of types using "extends".',
      'To constrain the size of generic arrays.',
      'To limit the number of generic type parameters.'
    ],
    correctAnswer: 'To restrict type parameters to a specific set of types using "extends".',
    difficulty: 'advanced',
    explanation: 'Generic constraints (T extends SomeType) ensure type parameters have required properties/methods, enabling safe operations within generic functions.'
  },
  {
    id: 'wd-21',
    type: 'mcq',
    category: 'TypeScript Utility Types',
    text: 'What does "Partial<T>" do in TypeScript?',
    options: [
      'Makes all properties of T required.',
      'Makes all properties of T optional.',
      'Extracts a subset of properties from T.',
      'Creates a union of T with null.'
    ],
    correctAnswer: 'Makes all properties of T optional.',
    difficulty: 'intermediate',
    explanation: 'Partial<T> maps all properties to optional: { [K in keyof T]?: T[K] }; useful for update operations where not all fields are provided.'
  },
  {
    id: 'wd-22',
    type: 'mcq',
    category: 'JavaScript Async',
    text: 'What is the difference between "Promise.all" and "Promise.allSettled"?',
    options: [
      'Promise.all waits for all to resolve or any to reject; Promise.allSettled waits for all to settle (resolve or reject) and returns statuses.',
      'Promise.all is faster; Promise.allSettled is slower.',
      'Promise.all works only with arrays; Promise.allSettled works with objects.',
      'They are identical.'
    ],
    correctAnswer: 'Promise.all waits for all to resolve or any to reject; Promise.allSettled waits for all to settle (resolve or reject) and returns statuses.',
    difficulty: 'advanced',
    explanation: 'Promise.all rejects immediately on first rejection; Promise.allSettled always resolves with array of {status, value/reason} for each promise.'
  },
  {
    id: 'wd-23',
    type: 'mcq',
    category: 'JavaScript Modules',
    text: 'What is the main difference between CommonJS and ES Modules?',
    options: [
      'CommonJS uses import/export; ES Modules use require/module.exports.',
      'CommonJS is synchronous and dynamic; ES Modules are asynchronous, static, and support tree-shaking.',
      'ES Modules only work in browsers; CommonJS only in Node.js.',
      'There is no practical difference.'
    ],
    correctAnswer: 'CommonJS is synchronous and dynamic; ES Modules are asynchronous, static, and support tree-shaking.',
    difficulty: 'intermediate',
    explanation: 'ES Modules are statically analyzable (enabling tree-shaking), live bindings, and top-level await; CommonJS is dynamic, synchronous, with value copies.'
  },
  {
    id: 'wd-24',
    type: 'mcq',
    category: 'TypeScript Advanced',
    text: 'What is a "Mapped Type" in TypeScript?',
    options: [
      'A type that maps one function to another.',
      'A type that creates a new type by transforming properties of an existing type using "in" and key remapping.',
      'A type for mapping arrays to objects.',
      'A deprecated feature replaced by interfaces.'
    ],
    correctAnswer: 'A type that creates a new type by transforming properties of an existing type using "in" and key remapping.',
    difficulty: 'expert',
    explanation: 'Mapped types: { [K in keyof T]: NewType } transform each property; combined with conditional types and key remapping for powerful type manipulations.'
  },
  {
    id: 'wd-25',
    type: 'mcq',
    category: 'JavaScript Performance',
    text: 'What is "Debouncing" vs "Throttling"?',
    options: [
      'Debouncing delays execution until after a pause; throttling limits execution to once per time interval.',
      'Debouncing is for scroll events; throttling is for click events.',
      'They are the same technique with different names.',
      'Debouncing increases frequency; throttling decreases it.'
    ],
    correctAnswer: 'Debouncing delays execution until after a pause; throttling limits execution to once per time interval.',
    difficulty: 'intermediate',
    explanation: 'Debounce: wait for silence (e.g., search input); Throttle: execute at most once per interval (e.g., scroll, resize); both reduce expensive function calls.'
  },
  {
    id: 'wd-26',
    type: 'mcq',
    category: 'JavaScript Memory',
    text: 'What causes a "Memory Leak" in JavaScript applications?',
    options: [
      'Using too many variables in a function.',
      'Retaining references to unused objects (e.g., forgotten event listeners, closures, detached DOM nodes) preventing garbage collection.',
      'Declaring variables with "var" instead of "let".',
      'Using async/await without try/catch.'
    ],
    correctAnswer: 'Retaining references to unused objects (e.g., forgotten event listeners, closures, detached DOM nodes) preventing garbage collection.',
    difficulty: 'advanced',
    explanation: 'Memory leaks occur when objects remain reachable but unused; use WeakMap, remove listeners, avoid global variables, and profile with Chrome DevTools.'
  },
  {
    id: 'wd-27',
    type: 'mcq',
    category: 'TypeScript Narrowing',
    text: 'What is "Type Narrowing" in TypeScript?',
    options: [
      'Reducing the size of compiled JavaScript output.',
      'Refining a union type to a specific type using type guards, instanceof, or discriminants.',
      'Converting complex types to simpler ones.',
      'Limiting the number of type parameters in generics.'
    ],
    correctAnswer: 'Refining a union type to a specific type using type guards, instanceof, or discriminants.',
    difficulty: 'advanced',
    explanation: 'Type narrowing (typeof, instanceof, in, equality checks, custom guards) lets TypeScript infer more specific types within conditional blocks.'
  },
  {
    id: 'wd-28',
    type: 'mcq',
    category: 'JavaScript This',
    text: 'How does "arrow functions" handle the "this" keyword differently?',
    options: [
      'Arrow functions cannot use "this" at all.',
      'Arrow functions lexically bind "this" from the enclosing scope, unlike regular functions which bind based on call site.',
      'Arrow functions always bind "this" to the global object.',
      'Arrow functions bind "this" to the first argument.'
    ],
    correctAnswer: 'Arrow functions lexically bind "this" from the enclosing scope, unlike regular functions which bind based on call site.',
    difficulty: 'intermediate',
    explanation: 'Arrow functions inherit this from surrounding context; useful for callbacks but problematic for methods needing dynamic this (use regular functions).'
  },
  {
    id: 'wd-29',
    type: 'mcq',
    category: 'TypeScript Conditional Types',
    text: 'What is a "Conditional Type" in TypeScript?',
    options: [
      'A type that changes based on runtime conditions.',
      'A type that selects one of two types based on a condition: T extends U ? X : Y.',
      'A type that is only available in certain TypeScript versions.',
      'A type for conditional rendering in JSX.'
    ],
    correctAnswer: 'A type that selects one of two types based on a condition: T extends U ? X : Y.',
    difficulty: 'expert',
    explanation: 'Conditional types enable type-level logic; combined with infer, mapped types, and recursion for advanced type transformations (e.g., Extract, Exclude).'
  },
  {
    id: 'wd-30',
    type: 'mcq',
    category: 'JavaScript Iterators',
    text: 'What is the difference between "Iterator" and "Iterable" in JavaScript?',
    options: [
      'They are synonyms.',
      'Iterable has [Symbol.iterator]() returning an Iterator; Iterator has next() method returning {value, done}.',
      'Iterator is for arrays only; Iterable is for objects only.',
      'Iterable is asynchronous; Iterator is synchronous.'
    ],
    correctAnswer: 'Iterable has [Symbol.iterator]() returning an Iterator; Iterator has next() method returning {value, done}.',
    difficulty: 'advanced',
    explanation: 'Iterables (arrays, strings, Map) can be used in for...of; custom iterables implement [Symbol.iterator]; iterators enable lazy evaluation and generators.'
  },

  // ==================== CSS & STYLING ADVANCED (Questions 31-45) ====================
  {
    id: 'wd-31',
    type: 'mcq',
    category: 'CSS Layout',
    text: 'What is the main difference between "Grid" and "Flexbox"?',
    options: [
      'Grid is one-dimensional; Flexbox is two-dimensional.',
      'Grid is two-dimensional (rows and columns); Flexbox is one-dimensional (row OR column).',
      'Flexbox is deprecated in favor of Grid.',
      'Grid only works with fixed sizes; Flexbox only with percentages.'
    ],
    correctAnswer: 'Grid is two-dimensional (rows and columns); Flexbox is one-dimensional (row OR column).',
    difficulty: 'intermediate',
    explanation: 'Use Flexbox for linear layouts (navbars, toolbars); Grid for complex 2D layouts (dashboards, galleries); they can be combined effectively.'
  },
  {
    id: 'wd-32',
    type: 'mcq',
    category: 'CSS Specificity',
    text: 'How is CSS specificity calculated?',
    options: [
      'By the order of rules in the stylesheet.',
      'By counting inline styles (1000), IDs (100), classes/attributes/pseudo-classes (10), elements/pseudo-elements (1).',
      'By the file size of the CSS.',
      'By the number of !important declarations.'
    ],
    correctAnswer: 'By counting inline styles (1000), IDs (100), classes/attributes/pseudo-classes (10), elements/pseudo-elements (1).',
    difficulty: 'intermediate',
    explanation: 'Specificity is a weighted score: inline > ID > class > element; !important overrides specificity but should be avoided for maintainability.'
  },
  {
    id: 'wd-33',
    type: 'mcq',
    category: 'CSS Modern Features',
    text: 'What is the purpose of "CSS Container Queries"?',
    options: [
      'To query the browser viewport size.',
      'To apply styles based on the size of a parent container, enabling truly component-responsive design.',
      'To query database containers in backend systems.',
      'To containerize CSS for micro-frontends.'
    ],
    correctAnswer: 'To apply styles based on the size of a parent container, enabling truly component-responsive design.',
    difficulty: 'advanced',
    explanation: 'Container queries (@container) allow components to adapt to their container\'s size, not just viewport; superior for reusable, composable UIs.'
  },
  {
    id: 'wd-34',
    type: 'mcq',
    category: 'CSS Performance',
    text: 'Which CSS property is most expensive for browser performance?',
    options: [
      'color',
      'transform and opacity (composited properties are cheap)',
      'width, height, top, left (trigger layout/reflow)',
      'font-family'
    ],
    correctAnswer: 'width, height, top, left (trigger layout/reflow)',
    difficulty: 'advanced',
    explanation: 'Layout-triggering properties (geometry, position) cause reflow; prefer transform/opacity for animations (handled by compositor, no reflow).'
  },
  {
    id: 'wd-35',
    type: 'mcq',
    category: 'CSS Architecture',
    text: 'What is the main benefit of "CSS-in-JS" solutions?',
    options: [
      'They eliminate the need for CSS entirely.',
      'They enable component-scoped styles, dynamic theming, and co-location of styles with logic.',
      'They are always faster than traditional CSS.',
      'They work only with React.'
    ],
    correctAnswer: 'They enable component-scoped styles, dynamic theming, and co-location of styles with logic.',
    difficulty: 'intermediate',
    explanation: 'CSS-in-JS (styled-components, Emotion) provides scoping, theming, dynamic styles via JS; tradeoffs include runtime overhead and debugging complexity.'
  },
  {
    id: 'wd-36',
    type: 'mcq',
    category: 'CSS Preprocessors',
    text: 'What is the key advantage of Sass/SCSS over plain CSS?',
    options: [
      'It runs faster in browsers.',
      'It adds variables, nesting, mixins, functions, and modular imports for more maintainable stylesheets.',
      'It eliminates the need for build tools.',
      'It is a replacement for JavaScript.'
    ],
    correctAnswer: 'It adds variables, nesting, mixins, functions, and modular imports for more maintainable stylesheets.',
    difficulty: 'intermediate',
    explanation: 'Sass/SCSS extends CSS with programming features; compiled to standard CSS; enables DRY principles and complex style logic.'
  },
  {
    id: 'wd-37',
    type: 'mcq',
    category: 'CSS Animations',
    text: 'What is the difference between "CSS Transitions" and "CSS Animations"?',
    options: [
      'Transitions require a trigger (hover, class change); animations run automatically with keyframes and more control.',
      'Animations are deprecated in favor of transitions.',
      'Transitions work only on opacity; animations work on all properties.',
      'They are identical.'
    ],
    correctAnswer: 'Transitions require a trigger (hover, class change); animations run automatically with keyframes and more control.',
    difficulty: 'intermediate',
    explanation: 'Transitions: simple state changes; Animations: complex sequences with @keyframes, iteration count, direction, and fill-mode controls.'
  },
  {
    id: 'wd-38',
    type: 'mcq',
    category: 'CSS Responsive Design',
    text: 'What is the "Mobile-First" approach in responsive CSS?',
    options: [
      'Designing for mobile devices first, then adding styles for larger screens via min-width media queries.',
      'Only supporting mobile browsers.',
      'Using JavaScript to detect mobile devices.',
      'Starting with desktop styles and overriding for mobile.'
    ],
    correctAnswer: 'Designing for mobile devices first, then adding styles for larger screens via min-width media queries.',
    difficulty: 'intermediate',
    explanation: 'Mobile-first: base styles for small screens, enhance with min-width queries; improves performance (mobile loads less CSS) and progressive enhancement.'
  },
  {
    id: 'wd-39',
    type: 'mcq',
    category: 'CSS Variables',
    text: 'What is the scope of "CSS Custom Properties" (variables)?',
    options: [
      'Global only; cannot be scoped.',
      'Follow the cascade: defined on an element, available to its descendants; can be overridden at any level.',
      'Only available within @media queries.',
      'Limited to the file where they are defined.'
    ],
    correctAnswer: 'Follow the cascade: defined on an element, available to its descendants; can be overridden at any level.',
    difficulty: 'intermediate',
    explanation: 'CSS variables (--name) are cascade-scoped; can be dynamic (changed via JS), themed, and used in calc(); superior to Sass variables for runtime changes.'
  },
  {
    id: 'wd-40',
    type: 'mcq',
    category: 'CSS Accessibility',
    text: 'Why is sufficient "color contrast" important in CSS?',
    options: [
      'It makes the website look more colorful.',
      'It ensures text is readable for users with visual impairments, meeting WCAG accessibility guidelines.',
      'It improves SEO rankings.',
      'It reduces CSS file size.'
    ],
    correctAnswer: 'It ensures text is readable for users with visual impairments, meeting WCAG accessibility guidelines.',
    difficulty: 'intermediate',
    explanation: 'WCAG requires 4.5:1 contrast for normal text, 3:1 for large text; use tools like axe, Lighthouse to audit; critical for inclusive design.'
  },
  {
    id: 'wd-41',
    type: 'mcq',
    category: 'CSS Methodologies',
    text: 'What is the main principle of "BEM" (Block Element Modifier) methodology?',
    options: [
      'Using inline styles for all components.',
      'Naming classes as block__element--modifier to create flat, predictable, and reusable CSS selectors.',
      'Avoiding CSS classes entirely.',
      'Using only IDs for styling.'
    ],
    correctAnswer: 'Naming classes as block__element--modifier to create flat, predictable, and reusable CSS selectors.',
    difficulty: 'intermediate',
    explanation: 'BEM: .card (block), .card__title (element), .card--featured (modifier); avoids nesting, reduces specificity wars, improves maintainability.'
  },
  {
    id: 'wd-42',
    type: 'mcq',
    category: 'CSS Frameworks',
    text: 'What is "Utility-First CSS" (e.g., Tailwind) approach?',
    options: [
      'Writing all CSS in JavaScript.',
      'Using small, single-purpose classes to compose designs directly in HTML, reducing custom CSS.',
      'Only using framework components without customization.',
      'Generating CSS at runtime.'
    ],
    correctAnswer: 'Using small, single-purpose classes to compose designs directly in HTML, reducing custom CSS.',
    difficulty: 'intermediate',
    explanation: 'Utility-first (Tailwind, Tachyons) provides atomic classes (p-4, flex, text-center); enables rapid prototyping, consistent design, and small bundles via PurgeCSS.'
  },
  {
    id: 'wd-43',
    type: 'mcq',
    category: 'CSS Subgrid',
    text: 'What problem does "CSS Subgrid" solve?',
    options: [
      'It allows grids to be nested while aligning with the parent grid\'s tracks.',
      'It compresses CSS files automatically.',
      'It replaces the need for Flexbox.',
      'It enables 3D transforms in CSS.'
    ],
    correctAnswer: 'It allows grids to be nested while aligning with the parent grid\'s tracks.',
    difficulty: 'expert',
    explanation: 'Subgrid (grid-template-rows/columns: subgrid) lets child grids inherit parent\'s track definitions, enabling aligned nested layouts without manual calculations.'
  },
  {
    id: 'wd-44',
    type: 'mcq',
    category: 'CSS Logical Properties',
    text: 'What is the benefit of "CSS Logical Properties" (e.g., margin-inline-start)?',
    options: [
      'They are shorter to write than physical properties.',
      'They adapt to writing modes (LTR/RTL) and vertical text, improving internationalization.',
      'They are faster for browsers to parse.',
      'They only work with Flexbox.'
    ],
    correctAnswer: 'They adapt to writing modes (LTR/RTL) and vertical text, improving internationalization.',
    difficulty: 'advanced',
    explanation: 'Logical properties (inline-start, block-end) replace physical (left, top) for direction-agnostic layouts; essential for RTL languages and vertical writing modes.'
  },
  {
    id: 'wd-45',
    type: 'mcq',
    category: 'CSS Scroll Snap',
    text: 'What does "CSS Scroll Snap" enable?',
    options: [
      'Preventing scrolljacking by third-party scripts.',
      'Creating scrollable containers where child elements snap to specific positions, improving UX for carousels and sections.',
      'Disabling scroll on mobile devices.',
      'Animating scroll position with JavaScript.'
    ],
    correctAnswer: 'Creating scrollable containers where child elements snap to specific positions, improving UX for carousels and sections.',
    difficulty: 'advanced',
    explanation: 'Scroll Snap (scroll-snap-type, scroll-snap-align) provides native, performant snapping without JS; supports mandatory/proximity snapping and offset.'
  },

  // ==================== NODE.JS & BACKEND (Questions 46-60) ====================
  {
    id: 'wd-46',
    type: 'mcq',
    category: 'Node.js Event Loop',
    text: 'What are the phases of the Node.js Event Loop?',
    options: [
      'Only one phase: execute callbacks.',
      'Timers, Pending Callbacks, Idle/Prepare, Poll, Check, Close Callbacks.',
      'Request, Response, Render.',
      'Compile, Execute, Garbage Collect.'
    ],
    correctAnswer: 'Timers, Pending Callbacks, Idle/Prepare, Poll, Check, Close Callbacks.',
    difficulty: 'expert',
    explanation: 'Node.js event loop phases: timers (setTimeout), pending (I/O), poll (new I/O events), check (setImmediate), close (close handlers); microtasks run between phases.'
  },
  {
    id: 'wd-47',
    type: 'mcq',
    category: 'Node.js Streams',
    text: 'What is the main benefit of using "Streams" in Node.js?',
    options: [
      'They make code synchronous.',
      'They handle large data efficiently by processing chunks, reducing memory usage and enabling pipelining.',
      'They automatically compress data.',
      'They replace the need for databases.'
    ],
    correctAnswer: 'They handle large data efficiently by processing chunks, reducing memory usage and enabling pipelining.',
    difficulty: 'advanced',
    explanation: 'Streams (Readable, Writable, Duplex, Transform) process data incrementally; essential for file I/O, HTTP, and real-time data without loading entire payload into memory.'
  },
  {
    id: 'wd-48',
    type: 'mcq',
    category: 'Node.js Clustering',
    text: 'Why use the "Cluster" module in Node.js?',
    options: [
      'To run multiple Node.js versions simultaneously.',
      'To spawn worker processes that share the same server port, utilizing multi-core CPUs.',
      'To cluster database connections.',
      'To group related modules together.'
    ],
    correctAnswer: 'To spawn worker processes that share the same server port, utilizing multi-core CPUs.',
    difficulty: 'advanced',
    explanation: 'Node.js is single-threaded; Cluster module forks workers to leverage all CPU cores, improving throughput for CPU-bound or high-concurrency apps.'
  },
  {
    id: 'wd-49',
    type: 'mcq',
    category: 'Node.js Security',
    text: 'What is "Prototype Pollution" in Node.js?',
    options: [
      'Changing the prototype of built-in objects for performance.',
      'A vulnerability where malicious input modifies Object.prototype, affecting all objects and potentially enabling RCE.',
      'A feature for extending object prototypes safely.',
      'Polluting the global namespace with variables.'
    ],
    correctAnswer: 'A vulnerability where malicious input modifies Object.prototype, affecting all objects and potentially enabling RCE.',
    difficulty: 'expert',
    explanation: 'Prototype pollution occurs when recursive merge functions allow __proto__ manipulation; mitigate by freezing prototypes, using Object.create(null), and sanitizing input.'
  },
  {
    id: 'wd-50',
    type: 'mcq',
    category: 'Express.js Middleware',
    text: 'What is the execution order of Express middleware?',
    options: [
      'Random order for performance.',
      'Sequential in the order they are registered; next() passes control to the next middleware.',
      'Parallel execution for all middleware.',
      'Only the last middleware executes.'
    ],
    correctAnswer: 'Sequential in the order they are registered; next() passes control to the next middleware.',
    difficulty: 'intermediate',
    explanation: 'Express middleware executes in registration order; call next() to continue, or send response to end; error-handling middleware has 4 parameters.'
  },
  {
    id: 'wd-51',
    type: 'mcq',
    category: 'Node.js Package Management',
    text: 'What is the difference between "dependencies" and "devDependencies" in package.json?',
    options: [
      'No difference; just organizational.',
      'dependencies are required for production; devDependencies are only for development/build tools.',
      'devDependencies are installed globally; dependencies locally.',
      'dependencies are for frontend; devDependencies for backend.'
    ],
    correctAnswer: 'dependencies are required for production; devDependencies are only for development/build tools.',
    difficulty: 'beginner',
    explanation: 'npm install --production skips devDependencies; reduces deploy size and attack surface; use devDeps for testing, linting, bundling tools.'
  },
  {
    id: 'wd-52',
    type: 'mcq',
    category: 'Node.js Error Handling',
    text: 'What is the best practice for error handling in async/await?',
    options: [
      'Ignore errors to improve performance.',
      'Wrap async calls in try/catch blocks or use .catch() on Promises.',
      'Only handle errors at the top level of the app.',
      'Use global error handlers exclusively.'
    ],
    correctAnswer: 'Wrap async calls in try/catch blocks or use .catch() on Promises.',
    difficulty: 'intermediate',
    explanation: 'Unhandled promise rejections crash Node.js; always handle errors locally with try/catch or propagate to centralized error middleware for logging/response.'
  },
  {
    id: 'wd-53',
    type: 'mcq',
    category: 'Node.js Performance',
    text: 'What is "Event Loop Lag" and why does it matter?',
    options: [
      'The time between events; high lag indicates the loop is blocked, causing delayed responses.',
      'The latency of network events.',
      'A metric for garbage collection frequency.',
      'The delay in module loading.'
    ],
    correctAnswer: 'The time between events; high lag indicates the loop is blocked, causing delayed responses.',
    difficulty: 'expert',
    explanation: 'Event loop lag measures delay in processing next event; high lag (>100ms) signals blocking operations (sync I/O, heavy computation) hurting responsiveness.'
  },
  {
    id: 'wd-54',
    type: 'mcq',
    category: 'Node.js Modules',
    text: 'What is the purpose of "module.exports" vs "exports" in CommonJS?',
    options: [
      'They are identical in all cases.',
      'exports is a reference to module.exports; reassigning exports breaks the reference, so use module.exports for objects/functions.',
      'module.exports is for ES modules; exports is for CommonJS.',
      'exports is deprecated.'
    ],
    correctAnswer: 'exports is a reference to module.exports; reassigning exports breaks the reference, so use module.exports for objects/functions.',
    difficulty: 'intermediate',
    explanation: 'exports = module.exports initially; exports.prop = x works, but exports = {} breaks the link; prefer module.exports = for clarity.'
  },
  {
    id: 'wd-55',
    type: 'mcq',
    category: 'Node.js Buffers',
    text: 'What is a "Buffer" in Node.js?',
    options: [
      'A temporary storage for CSS styles.',
      'A global class for handling binary data directly, used for I/O, cryptography, and network protocols.',
      'A caching mechanism for database queries.',
      'A debugging tool for memory leaks.'
    ],
    correctAnswer: 'A global class for handling binary data directly, used for I/O, cryptography, and network protocols.',
    difficulty: 'intermediate',
    explanation: 'Buffer represents fixed-size raw memory; essential for file streams, TCP/UDP, crypto; methods for encoding, slicing, copying binary data.'
  },
  {
    id: 'wd-56',
    type: 'mcq',
    category: 'Express.js Routing',
    text: 'What is the difference between "app.use" and "app.get" in Express?',
    options: [
      'app.use handles all HTTP methods; app.get only handles GET requests.',
      'app.use mounts middleware at a path; app.get defines a route handler for GET requests.',
      'app.use is for static files; app.get is for APIs.',
      'They are interchangeable.'
    ],
    correctAnswer: 'app.use mounts middleware at a path; app.get defines a route handler for GET requests.',
    difficulty: 'intermediate',
    explanation: 'app.use(path, middleware) runs for any HTTP method; app.get(path, handler) only for GET; app.all, app.post, etc. for specific methods.'
  },
  {
    id: 'wd-57',
    type: 'mcq',
    category: 'Node.js Environment',
    text: 'What is the purpose of ".env" files and "dotenv" package?',
    options: [
      'To store CSS variables.',
      'To load environment variables from a file into process.env, separating config from code.',
      'To define Node.js version requirements.',
      'To cache npm packages.'
    ],
    correctAnswer: 'To load environment variables from a file into process.env, separating config from code.',
    difficulty: 'beginner',
    explanation: 'dotenv parses .env file and populates process.env; enables environment-specific config (API keys, DB URLs) without hardcoding; never commit .env to version control.'
  },
  {
    id: 'wd-58',
    type: 'mcq',
    category: 'Node.js Testing',
    text: 'What is "Mocking" in Node.js testing?',
    options: [
      'Copying production data for tests.',
      'Replacing real dependencies (APIs, databases) with controlled fakes to isolate unit tests.',
      'Creating mock UI components.',
      'Simulating network latency.'
    ],
    correctAnswer: 'Replacing real dependencies (APIs, databases) with controlled fakes to isolate unit tests.',
    difficulty: 'intermediate',
    explanation: 'Mocking (Jest, Sinon) stubs external dependencies to test logic in isolation; use spies, stubs, fakes to verify interactions and control outputs.'
  },
  {
    id: 'wd-59',
    type: 'mcq',
    category: 'Node.js Deployment',
    text: 'What is "PM2" used for in Node.js?',
    options: [
      'A package manager alternative to npm.',
      'A process manager for keeping Node.js apps running, with load balancing, log management, and auto-restart.',
      'A testing framework for microservices.',
      'A CSS preprocessor for backend styles.'
    ],
    correctAnswer: 'A process manager for keeping Node.js apps running, with load balancing, log management, and auto-restart.',
    difficulty: 'intermediate',
    explanation: 'PM2 provides production features: cluster mode, zero-downtime reload, monitoring, log rotation; essential for reliable Node.js deployments.'
  },
  {
    id: 'wd-60',
    type: 'mcq',
    category: 'Node.js Security',
    text: 'Why sanitize user input in Node.js APIs?',
    options: [
      'To improve API response time.',
      'To prevent injection attacks (SQL, NoSQL, XSS, command injection) by validating and escaping untrusted data.',
      'To reduce database storage size.',
      'To enable caching of API responses.'
    ],
    correctAnswer: 'To prevent injection attacks (SQL, NoSQL, XSS, command injection) by validating and escaping untrusted data.',
    difficulty: 'intermediate',
    explanation: 'Never trust client input; use validation libraries (Joi, express-validator), parameterized queries, and output encoding to mitigate injection vulnerabilities.'
  },

  // ==================== WEB PERFORMANCE & OPTIMIZATION (Questions 61-75) ====================
  {
    id: 'wd-61',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "First Contentful Paint" (FCP)?',
    options: [
      'The time when the page fully loads.',
      'The time when the first text or image is rendered on screen, indicating perceived load speed.',
      'The time when JavaScript finishes executing.',
      'The time when the server responds.'
    ],
    correctAnswer: 'The time when the first text or image is rendered on screen, indicating perceived load speed.',
    difficulty: 'intermediate',
    explanation: 'FCP is a Core Web Vital; measures when users first see content; optimize by reducing render-blocking resources, using critical CSS, and lazy-loading.'
  },
  {
    id: 'wd-62',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Cumulative Layout Shift" (CLS)?',
    options: [
      'The total size of CSS files.',
      'A metric measuring visual stability: unexpected layout shifts during page load that disrupt user experience.',
      'The shift in server load during peak hours.',
      'The change in layout between mobile and desktop.'
    ],
    correctAnswer: 'A metric measuring visual stability: unexpected layout shifts during page load that disrupt user experience.',
    difficulty: 'intermediate',
    explanation: 'CLS quantifies layout instability; caused by images without dimensions, ads, dynamically injected content; fix with size attributes, reserve space, avoid FOUC.'
  },
  {
    id: 'wd-63',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Code Splitting" benefit for performance?',
    options: [
      'It splits CSS into smaller files.',
      'It reduces initial bundle size by loading code on-demand, improving Time to Interactive.',
      'It divides the team\'s codebase.',
      'It compresses images automatically.'
    ],
    correctAnswer: 'It reduces initial bundle size by loading code on-demand, improving Time to Interactive.',
    difficulty: 'intermediate',
    explanation: 'Code splitting (dynamic import, React.lazy) loads only necessary code for initial view; defers non-critical chunks, reducing parse/compile time.'
  },
  {
    id: 'wd-64',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Critical CSS"?',
    options: [
      'CSS that is critical for SEO.',
      'The minimal CSS required to render above-the-fold content, inlined to avoid render-blocking.',
      'CSS that must be minified.',
      'CSS for critical error handling.'
    ],
    correctAnswer: 'The minimal CSS required to render above-the-fold content, inlined to avoid render-blocking.',
    difficulty: 'advanced',
    explanation: 'Critical CSS is inlined in <style> to paint above-fold content immediately; remaining CSS loaded async; improves FCP and perceived performance.'
  },
  {
    id: 'wd-65',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Resource Hints" (preload, prefetch, preconnect)?',
    options: [
      'Hints for developers about resource usage.',
      'Browser directives to fetch resources early: preload (current page), prefetch (next page), preconnect (establish connections).',
      'Hints for search engine optimization.',
      'Debugging hints for performance tools.'
    ],
    correctAnswer: 'Browser directives to fetch resources early: preload (current page), prefetch (next page), preconnect (establish connections).',
    difficulty: 'advanced',
    explanation: 'Resource hints optimize loading: <link rel="preload"> for critical assets, "prefetch" for likely next navigation, "preconnect" for third-party origins.'
  },
  {
    id: 'wd-66',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Lazy Loading" for images?',
    options: [
      'Loading images only when they are needed (e.g., near viewport), reducing initial page weight.',
      'Loading images in the background thread.',
      'Using low-quality placeholders for images.',
      'Deferring image compression.'
    ],
    correctAnswer: 'Loading images only when they are needed (e.g., near viewport), reducing initial page weight.',
    difficulty: 'intermediate',
    explanation: 'Lazy loading (loading="lazy" attribute, Intersection Observer) defers offscreen images; reduces initial payload, improves LCP and data usage.'
  },
  {
    id: 'wd-67',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Tree Shaking" benefit?',
    options: [
      'Removing unused CSS selectors.',
      'Eliminating unused ES module exports from bundles via static analysis, reducing JavaScript size.',
      'Pruning dependency trees in npm.',
      'Optimizing DOM tree rendering.'
    ],
    correctAnswer: 'Eliminating unused ES module exports from bundles via static analysis, reducing JavaScript size.',
    difficulty: 'advanced',
    explanation: 'Tree shaking requires ES modules and sideEffect-free code; bundlers (Webpack, Rollup) analyze imports to exclude dead code, shrinking bundles.'
  },
  {
    id: 'wd-68',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Service Workers" role in performance?',
    options: [
      'They replace the need for a backend.',
      'They enable offline caching, background sync, and push notifications, improving repeat visit performance.',
      'They compress images on the fly.',
      'They manage CSS animations.'
    ],
    correctAnswer: 'They enable offline caching, background sync, and push notifications, improving repeat visit performance.',
    difficulty: 'advanced',
    explanation: 'Service Workers intercept network requests, cache assets strategically (Cache API), enable PWA features; critical for offline-first and fast repeat loads.'
  },
  {
    id: 'wd-69',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "HTTP/2 Server Push"?',
    options: [
      'Pushing server logs to clients.',
      'Proactively sending resources to client before they are requested, reducing round trips.',
      'Pushing code updates to production servers.',
      'Pushing notifications to users.'
    ],
    correctAnswer: 'Proactively sending resources to client before they are requested, reducing round trips.',
    difficulty: 'expert',
    explanation: 'HTTP/2 Push sends critical resources (CSS, JS) with initial HTML; use cautiously (can waste bandwidth if cached); often replaced by preload links.'
  },
  {
    id: 'wd-70',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Render-Blocking Resources"?',
    options: [
      'Resources that block user input.',
      'CSS/JS that must be fetched/parsed before rendering, delaying First Paint; optimize by inlining critical CSS, deferring non-critical JS.',
      'Resources that block search engine crawlers.',
      'Resources that block database connections.'
    ],
    correctAnswer: 'CSS/JS that must be fetched/parsed before rendering, delaying First Paint; optimize by inlining critical CSS, deferring non-critical JS.',
    difficulty: 'intermediate',
    explanation: 'Render-blocking resources delay page paint; fix by async/defer scripts, inline critical CSS, split CSS, and use resource hints.'
  },
  {
    id: 'wd-71',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Long Tasks API" used for?',
    options: [
      'Tracking long-running server requests.',
      'Identifying JavaScript tasks that block the main thread for >50ms, impacting interactivity.',
      'Measuring CSS animation duration.',
      'Logging long user sessions.'
    ],
    correctAnswer: 'Identifying JavaScript tasks that block the main thread for >50ms, impacting interactivity.',
    difficulty: 'expert',
    explanation: 'Long Tasks API (PerformanceObserver) reports tasks blocking main thread; use to find and break up heavy JS, improve Time to Interactive.'
  },
  {
    id: 'wd-72',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Preconnect" resource hint?',
    options: [
      'Connecting to a database before queries.',
      'Establishing early connection to third-party origins (DNS, TCP, TLS) to reduce latency when resource is requested.',
      'Pre-connecting CSS files.',
      'Connecting multiple servers for load balancing.'
    ],
    correctAnswer: 'Establishing early connection to third-party origins (DNS, TCP, TLS) to reduce latency when resource is requested.',
    difficulty: 'advanced',
    explanation: '<link rel="preconnect" href="https://fonts.googleapis.com"> performs DNS lookup, TCP handshake, TLS negotiation early; saves 100-500ms on resource fetch.'
  },
  {
    id: 'wd-73',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Font Display: swap" in CSS?',
    options: [
      'Swapping fonts between users.',
      'Displaying fallback font immediately while web font loads, preventing invisible text (FOIT).',
      'Swapping font weights dynamically.',
      'A method to compress fonts.'
    ],
    correctAnswer: 'Displaying fallback font immediately while web font loads, preventing invisible text (FOIT).',
    difficulty: 'intermediate',
    explanation: 'font-display: swap shows system font until custom font loads; improves perceived performance; other values: block, fallback, optional, auto.'
  },
  {
    id: 'wd-74',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Bundle Analysis" in build tools?',
    options: [
      'Analyzing bundle pricing.',
      'Inspecting bundle composition to identify large dependencies, duplicate modules, and optimization opportunities.',
      'Analyzing user behavior in bundles.',
      'Analyzing network bundles.'
    ],
    correctAnswer: 'Inspecting bundle composition to identify large dependencies, duplicate modules, and optimization opportunities.',
    difficulty: 'advanced',
    explanation: 'Bundle analyzers (Webpack Bundle Analyzer, source-map-explorer) visualize bundle contents; help remove unused code, split chunks, and reduce size.'
  },
  {
    id: 'wd-75',
    type: 'mcq',
    category: 'Web Performance',
    text: 'What is "Core Web Vitals"?',
    options: [
      'A set of CSS variables for performance.',
      'Three user-centric metrics: LCP (loading), FID/INP (interactivity), CLS (visual stability) used by Google for ranking.',
      'Core server metrics for backend performance.',
      'Vital signs for web developers.'
    ],
    correctAnswer: 'Three user-centric metrics: LCP (loading), FID/INP (interactivity), CLS (visual stability) used by Google for ranking.',
    difficulty: 'intermediate',
    explanation: 'Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1; measure real-user experience; optimized via resource loading, code splitting, and layout stability.'
  },

  // ==================== WEB SECURITY (Questions 76-90) ====================
  {
    id: 'wd-76',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Cross-Site Scripting" (XSS)?',
    options: [
      'A vulnerability allowing attackers to inject malicious scripts into web pages viewed by other users.',
      'A method to share scripts between websites securely.',
      'A technique for cross-browser testing.',
      'A way to optimize JavaScript execution.'
    ],
    correctAnswer: 'A vulnerability allowing attackers to inject malicious scripts into web pages viewed by other users.',
    difficulty: 'intermediate',
    explanation: 'XSS types: reflected (URL), stored (database), DOM-based; prevent by escaping output, using CSP, sanitizing input, and avoiding innerHTML.'
  },
  {
    id: 'wd-77',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Content Security Policy" (CSP)?',
    options: [
      'A policy for content creators.',
      'An HTTP header that restricts resource loading (scripts, styles, images) to trusted sources, mitigating XSS and data injection.',
      'A CSS policy for styling consistency.',
      'A database security policy.'
    ],
    correctAnswer: 'An HTTP header that restricts resource loading (scripts, styles, images) to trusted sources, mitigating XSS and data injection.',
    difficulty: 'advanced',
    explanation: 'CSP directives (default-src, script-src) whitelist allowed origins; use nonces/hashes for inline scripts; report-only mode for testing before enforcement.'
  },
  {
    id: 'wd-78',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "SQL Injection"?',
    options: [
      'Injecting SQL databases into applications.',
      'A vulnerability where untrusted input is concatenated into SQL queries, allowing attackers to manipulate or exfiltrate data.',
      'A method to optimize SQL queries.',
      'Injecting JavaScript into SQL.'
    ],
    correctAnswer: 'A vulnerability where untrusted input is concatenated into SQL queries, allowing attackers to manipulate or exfiltrate data.',
    difficulty: 'intermediate',
    explanation: 'SQL injection exploits string concatenation; prevent with parameterized queries/prepared statements, ORM query builders, and input validation.'
  },
  {
    id: 'wd-79',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "HTTPS" and why is it important?',
    options: [
      'A faster version of HTTP.',
      'HTTP over TLS/SSL, providing encryption, authentication, and integrity to protect data in transit from eavesdropping and tampering.',
      'A protocol for internal networks only.',
      'A debugging tool for HTTP requests.'
    ],
    correctAnswer: 'HTTP over TLS/SSL, providing encryption, authentication, and integrity to protect data in transit from eavesdropping and tampering.',
    difficulty: 'beginner',
    explanation: 'HTTPS encrypts HTTP traffic with TLS; prevents MITM attacks, ensures data integrity, and is required for modern web features (Service Workers, Geolocation).'
  },
  {
    id: 'wd-80',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "SameSite" cookie attribute?',
    options: [
      'A cookie that works only on same-domain subdomains.',
      'A flag that restricts cookies to first-party or same-site requests, mitigating CSRF attacks.',
      'A cookie for same-device synchronization.',
      'A deprecated cookie feature.'
    ],
    correctAnswer: 'A flag that restricts cookies to first-party or same-site requests, mitigating CSRF attacks.',
    difficulty: 'advanced',
    explanation: 'SameSite=Strict/Lax/None controls cookie sending with cross-site requests; Lax (default) allows top-level navigations; Strict blocks all cross-site; None requires Secure.'
  },
  {
    id: 'wd-81',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Cross-Site Request Forgery" (CSRF)?',
    options: [
      'A request to forge cross-site scripts.',
      'An attack that tricks authenticated users into submitting unwanted requests to a web application.',
      'A method to forge SSL certificates across sites.',
      'A technique to request data from multiple sites.'
    ],
    correctAnswer: 'An attack that tricks authenticated users into submitting unwanted requests to a web application.',
    difficulty: 'intermediate',
    explanation: 'CSRF exploits browser\'s automatic credential inclusion; mitigate with anti-CSRF tokens, SameSite cookies, and requiring custom headers for state-changing requests.'
  },
  {
    id: 'wd-82',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Security Headers" like HSTS, X-Frame-Options?',
    options: [
      'Headers for SEO optimization.',
      'HTTP headers that enforce security policies: HSTS (force HTTPS), X-Frame-Options (prevent clickjacking), X-Content-Type-Options (prevent MIME sniffing).',
      'Headers for caching strategies.',
      'Headers for compression.'
    ],
    correctAnswer: 'HTTP headers that enforce security policies: HSTS (force HTTPS), X-Frame-Options (prevent clickjacking), X-Content-Type-Options (prevent MIME sniffing).',
    difficulty: 'advanced',
    explanation: 'Security headers harden apps: HSTS prevents downgrade attacks; X-Frame-Options blocks iframe embedding; X-Content-Type-Options stops MIME-type confusion.'
  },
  {
    id: 'wd-83',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "OAuth 2.0" primarily used for?',
    options: [
      'Encrypting user passwords.',
      'Delegated authorization: allowing apps to access user resources without sharing credentials.',
      'Authenticating users with biometrics.',
      'Creating secure VPN connections.'
    ],
    correctAnswer: 'Delegated authorization: allowing apps to access user resources without sharing credentials.',
    difficulty: 'intermediate',
    explanation: 'OAuth 2.0 enables third-party access via tokens (not passwords); flows: authorization code (web), implicit (deprecated), client credentials (server-to-server).'
  },
  {
    id: 'wd-84',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "JWT" (JSON Web Token)?',
    options: [
      'A JavaScript testing framework.',
      'A compact, URL-safe token format for securely transmitting claims between parties, often used for authentication.',
      'A JSON compression format.',
      'A web socket protocol.'
    ],
    correctAnswer: 'A compact, URL-safe token format for securely transmitting claims between parties, often used for authentication.',
    difficulty: 'intermediate',
    explanation: 'JWT = header.payload.signature; payload contains claims (user ID, roles); sign with HMAC or RSA; store securely (httpOnly cookies), validate expiration.'
  },
  {
    id: 'wd-85',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Rate Limiting" and why is it important?',
    options: [
      'Limiting the rate of CSS animations.',
      'Restricting the number of requests a client can make in a time window, preventing abuse, DDoS, and brute-force attacks.',
      'Limiting the download rate of resources.',
      'A method to throttle JavaScript execution.'
    ],
    correctAnswer: 'Restricting the number of requests a client can make in a time window, preventing abuse, DDoS, and brute-force attacks.',
    difficulty: 'intermediate',
    explanation: 'Rate limiting (token bucket, sliding window) protects APIs from abuse; implement with middleware (express-rate-limit), Redis, or API gateways.'
  },
  {
    id: 'wd-86',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Subresource Integrity" (SRI)?',
    options: [
      'A method to integrate subresources efficiently.',
      'An attribute that allows browsers to verify fetched resources (CDN scripts) haven\'t been tampered with, using cryptographic hashes.',
      'A technique for subresource caching.',
      'A way to prioritize subresource loading.'
    ],
    correctAnswer: 'An attribute that allows browsers to verify fetched resources (CDN scripts) haven\'t been tampered with, using cryptographic hashes.',
    difficulty: 'advanced',
    explanation: 'SRI: <script src="..." integrity="sha384-...">; browser computes hash and blocks execution if mismatch; protects against compromised CDNs or MITM attacks.'
  },
  {
    id: 'wd-87',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Clickjacking"?',
    options: [
      'Hacking by clicking malicious links.',
      'An attack that tricks users into clicking invisible elements by overlaying transparent iframes, hijacking their clicks.',
      'A method to optimize click handlers.',
      'A technique for A/B testing clicks.'
    ],
    correctAnswer: 'An attack that tricks users into clicking invisible elements by overlaying transparent iframes, hijacking their clicks.',
    difficulty: 'intermediate',
    explanation: 'Clickjacking embeds target site in transparent iframe; prevent with X-Frame-Options: DENY/SAMEORIGIN or CSP frame-ancestors directive.'
  },
  {
    id: 'wd-88',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Security.txt" standard?',
    options: [
      'A text file for security logs.',
      'A standardized file (.well-known/security.txt) that discloses security contact information and vulnerability disclosure policy.',
      'A text-based security protocol.',
      'A method to encrypt text files.'
    ],
    correctAnswer: 'A standardized file (.well-known/security.txt) that discloses security contact information and vulnerability disclosure policy.',
    difficulty: 'advanced',
    explanation: 'security.txt (RFC 9116) helps researchers report vulnerabilities; includes Contact, Encryption, Acknowledgments; placed at /.well-known/security.txt or root.'
  },
  {
    id: 'wd-89',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Dependency Scanning" for security?',
    options: [
      'Scanning dependencies for performance issues.',
      'Identifying known vulnerabilities in third-party libraries using tools like npm audit, Snyk, or Dependabot.',
      'Scanning dependency trees for circular references.',
      'Scanning for unused dependencies.'
    ],
    correctAnswer: 'Identifying known vulnerabilities in third-party libraries using tools like npm audit, Snyk, or Dependabot.',
    difficulty: 'intermediate',
    explanation: 'Dependency scanning checks packages against CVE databases; integrate into CI/CD to block vulnerable deps; regularly update and audit dependencies.'
  },
  {
    id: 'wd-90',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "Zero Trust" architecture for web apps?',
    options: [
      'Trusting no users at all.',
      'A security model that verifies every request regardless of origin, implementing least-privilege access and continuous authentication.',
      'A framework for zero-downtime deployments.',
      'A method to trust zero dependencies.'
    ],
    correctAnswer: 'A security model that verifies every request regardless of origin, implementing least-privilege access and continuous authentication.',
    difficulty: 'expert',
    explanation: 'Zero Trust assumes breach; requires identity verification, device health checks, micro-segmentation, and just-in-time access; critical for modern cloud apps.'
  },

  // ==================== TESTING & DEVOPS (Questions 91-100) ====================
  {
    id: 'wd-91',
    type: 'mcq',
    category: 'Testing Strategy',
    text: 'What is the "Testing Pyramid"?',
    options: [
      'A pyramid-shaped UI component.',
      'A strategy with many unit tests (fast, cheap), fewer integration tests, and few E2E tests (slow, expensive) for optimal coverage.',
      'A method to test pyramid structures in CSS.',
      'A hierarchy of test priorities.'
    ],
    correctAnswer: 'A strategy with many unit tests (fast, cheap), fewer integration tests, and few E2E tests (slow, expensive) for optimal coverage.',
    difficulty: 'intermediate',
    explanation: 'Testing Pyramid: base = unit tests (isolated logic), middle = integration (component/API interactions), top = E2E (user flows); balances speed and confidence.'
  },
  {
    id: 'wd-92',
    type: 'mcq',
    category: 'Testing Strategy',
    text: 'What is "Mocking" vs "Stubbing" in testing?',
    options: [
      'They are identical terms.',
      'Mocking verifies interactions (calls, arguments); stubbing provides canned responses without verification.',
      'Mocking is for frontend; stubbing for backend.',
      'Stubbing is deprecated.'
    ],
    correctAnswer: 'Mocking verifies interactions (calls, arguments); stubbing provides canned responses without verification.',
    difficulty: 'advanced',
    explanation: 'Stubs return predefined values; mocks assert behavior (e.g., "was this function called?"); use mocks sparingly to avoid brittle tests.'
  },
  {
    id: 'wd-93',
    type: 'mcq',
    category: 'Testing Strategy',
    text: 'What is "End-to-End" (E2E) testing?',
    options: [
      'Testing only the endpoints of an API.',
      'Testing the complete user flow in a real browser environment, simulating actual usage.',
      'Testing from end of development to end of deployment.',
      'Testing only the UI components.'
    ],
    correctAnswer: 'Testing the complete user flow in a real browser environment, simulating actual usage.',
    difficulty: 'intermediate',
    explanation: 'E2E tests (Cypress, Playwright) run in browser, interact with live app; catch integration issues but are slow; use for critical user journeys.'
  },
  {
    id: 'wd-94',
    type: 'mcq',
    category: 'DevOps',
    text: 'What is "CI/CD" in web development?',
    options: [
      'A CSS framework for continuous design.',
      'Continuous Integration (automated builds/tests on commit) and Continuous Deployment (automated releases) for faster, reliable delivery.',
      'A method to compress images continuously.',
      'A database migration strategy.'
    ],
    correctAnswer: 'Continuous Integration (automated builds/tests on commit) and Continuous Deployment (automated releases) for faster, reliable delivery.',
    difficulty: 'intermediate',
    explanation: 'CI/CD pipelines (GitHub Actions, GitLab CI) automate testing, building, and deploying; reduce human error, enable frequent releases, and improve code quality.'
  },
  {
    id: 'wd-95',
    type: 'mcq',
    category: 'DevOps',
    text: 'What is "Docker" used for in web development?',
    options: [
      'A CSS container for styling.',
      'Containerization: packaging apps with dependencies into isolated, portable units for consistent environments across dev, test, prod.',
      'A tool for docking UI components.',
      'A database container system.'
    ],
    correctAnswer: 'Containerization: packaging apps with dependencies into isolated, portable units for consistent environments across dev, test, prod.',
    difficulty: 'intermediate',
    explanation: 'Docker containers ensure "works on my machine" consistency; Dockerfiles define build steps; docker-compose orchestrates multi-container apps.'
  },
  {
    id: 'wd-96',
    type: 'mcq',
    category: 'DevOps',
    text: 'What is "Infrastructure as Code" (IaC)?',
    options: [
      'Coding infrastructure in CSS.',
      'Managing and provisioning infrastructure (servers, networks) through machine-readable definition files (Terraform, CloudFormation) instead of manual processes.',
      'A method to code infrastructure diagrams.',
      'A framework for infrastructure documentation.'
    ],
    correctAnswer: 'Managing and provisioning infrastructure (servers, networks) through machine-readable definition files (Terraform, CloudFormation) instead of manual processes.',
    difficulty: 'advanced',
    explanation: 'IaC enables version-controlled, repeatable infrastructure; supports drift detection, collaboration, and automated provisioning; essential for cloud-native apps.'
  },
  {
    id: 'wd-97',
    type: 'mcq',
    category: 'Testing Strategy',
    text: 'What is "Visual Regression Testing"?',
    options: [
      'Testing the vision of developers.',
      'Automated screenshot comparison to detect unintended UI changes, catching CSS/visual bugs that functional tests miss.',
      'Testing regression in visual acuity.',
      'A method to compress images for regression analysis.'
    ],
    correctAnswer: 'Automated screenshot comparison to detect unintended UI changes, catching CSS/visual bugs that functional tests miss.',
    difficulty: 'advanced',
    explanation: 'Visual regression tools (Percy, Chromatic) capture screenshots across viewports; compare pixel-by-pixel or via AI; integrate with CI to block visual regressions.'
  },
  {
    id: 'wd-98',
    type: 'mcq',
    category: 'DevOps',
    text: 'What is "Blue-Green Deployment"?',
    options: [
      'Deploying with blue and green color themes.',
      'A release strategy with two identical environments; switch traffic from blue (current) to green (new) for zero-downtime deployments and easy rollback.',
      'A method to deploy CSS themes.',
      'Deploying to blue and green servers alternately.'
    ],
    correctAnswer: 'A release strategy with two identical environments; switch traffic from blue (current) to green (new) for zero-downtime deployments and easy rollback.',
    difficulty: 'advanced',
    explanation: 'Blue-green reduces risk: test new version in green, then switch router; rollback is instant by reverting traffic; requires load balancer and database compatibility.'
  },
  {
    id: 'wd-99',
    type: 'mcq',
    category: 'Testing Strategy',
    text: 'What is "Contract Testing" in microservices?',
    options: [
      'Testing legal contracts for services.',
      'Verifying that service APIs adhere to agreed-upon request/response schemas, ensuring compatibility without full E2E tests.',
      'Testing contract signing workflows.',
      'A method to compress API contracts.'
    ],
    correctAnswer: 'Verifying that service APIs adhere to agreed-upon request/response schemas, ensuring compatibility without full E2E tests.',
    difficulty: 'expert',
    explanation: 'Contract testing (Pact, Spring Cloud Contract) defines consumer-driven contracts; providers verify against contracts; catches breaking changes early in CI.'
  },
  {
    id: 'wd-100',
    type: 'mcq',
    category: 'DevOps',
    text: 'What is "Observability" in modern web applications?',
    options: [
      'Making code observable to all developers.',
      'The ability to understand system state from external outputs: logs, metrics, and traces for debugging and monitoring.',
      'A method to observe CSS animations.',
      'Observing user behavior for analytics only.'
    ],
    correctAnswer: 'The ability to understand system state from external outputs: logs, metrics, and traces for debugging and monitoring.',
    difficulty: 'expert',
    explanation: 'Observability (vs monitoring) enables debugging unknown unknowns: structured logs (Winston), metrics (Prometheus), distributed tracing (OpenTelemetry) for full-stack visibility.'
  }
];

// Verify we have exactly 100 unique questions
console.assert(WEB_DEV_QUESTIONS.length === 100, 
  `Expected 100 questions, got ${WEB_DEV_QUESTIONS.length}`);

// Verify no duplicate IDs
const ids = WEB_DEV_QUESTIONS.map(q => q.id);
const uniqueIds = new Set(ids);
console.assert(ids.length === uniqueIds.size, 'Duplicate question IDs detected!');

// Verify no duplicate question texts
const texts = WEB_DEV_QUESTIONS.map(q => q.text);
const uniqueTexts = new Set(texts);
console.assert(texts.length === uniqueTexts.size, 'Duplicate question texts detected!');

// Optional: Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert'): Question[] => {
  return WEB_DEV_QUESTIONS.filter(q => q.difficulty === difficulty);
};

// Optional: Helper to get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return WEB_DEV_QUESTIONS.filter(q => q.category === category);
};

// Optional: Get random subset for exams with deterministic seeding
export const getRandomQuestions = (count: number, seed?: number): Question[] => {
  const shuffled = [...WEB_DEV_QUESTIONS];
  
  // Seeded shuffle using linear congruential generator
  if (seed !== undefined) {
    let randomSeed = seed;
    for (let i = shuffled.length - 1; i > 0; i--) {
      randomSeed = (randomSeed * 9301 + 49297) % 233280;
      const j = Math.floor((randomSeed / 233280) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  } else {
    // Standard Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  }
  return shuffled.slice(0, count);
};

export default WEB_DEV_QUESTIONS;