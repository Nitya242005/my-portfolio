import React, { useEffect, useState } from 'react';
import '../App.css';

const proTips = [
  "🧠 Did you know? CSS Grid can completely replace most Flexbox layouts with just 2-3 lines of code — and is more powerful for 2D layouts.",
  "💡 React re-renders only when props/state change — but excessive useState can cause performance drops. Use useRef/useMemo smartly.",
  "🚀 XGBoost performs better when input features are scaled properly, even though it's tree-based. Try quantile-based binning.",
  "🔍 In Django, you can use the 'prefetch_related' and 'select_related' to drastically reduce DB queries in complex views.",
  "🎯 The best way to optimize React re-renders is to memoize expensive components AND functions with useCallback.",
  "📦 Want faster page loads? Code-split with React.lazy() + Suspense to load only what's needed.",
  "🤯 You can pass entire functions as props in React — but avoid inline functions in JSX to reduce re-renders.",
  "🔬 You can use t-SNE or PCA to reduce dimensionality in ML datasets before feeding into XGBoost for better generalization.",
  "📊 Don't just use accuracy in ML — always check precision, recall, and F1 especially for imbalanced datasets.",
  "🎨 CSS Paint API lets you write JavaScript to draw styles — like custom borders, fancy shadows, and responsive shapes!",
  "🧪 In ML projects, keep a small clean validation set untouched during preprocessing to evaluate final real-world performance.",
  "⚙️ React’s useEffect can behave unexpectedly — cleanup functions and dependency arrays are crucial for stability.",
  "🔧 Django’s Form API can be used to render fields dynamically — even without HTML templates using Crispy Forms!",
  "🌈 Did you know? You can create glassmorphism using just 3 CSS properties: rgba background, backdrop-filter, and border-radius.",
  "🚧 You can load large ML models in JS using TensorFlow.js or ONNX.js — even deploy them in the browser!",
  "🌀 Did you know? Scroll animations slow down site speed if not throttled or debounced — especially on mobile.",
  "🌐 Lighthouse audit can tell you not just performance but accessibility and SEO score in real time.",
  "🗂️ CSS Variables can be scoped to components — allowing custom theming for every section without overwriting global styles.",
  "📁 You can use service workers in React PWA to cache assets and make your portfolio usable offline.",
  "🔎 Frontend bottlenecks are often due to expensive DOM updates — use virtual lists when rendering 1000+ items."
];

function Tips() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % proTips.length);
    }, 10000); // Rotate every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="parallax d-flex align-items-center justify-content-center text-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <h2 className="mb-4 glow">🧠 Did You Know?</h2>
        <h2 className="mb-4 glow">Each Tip- 10 Sec</h2>
        <div className="card panel-glass p-4 shadow-lg">
          <p className="lead">{proTips[index]}</p>
        </div>
      </div>
    </section>
  );
}

export default Tips;
