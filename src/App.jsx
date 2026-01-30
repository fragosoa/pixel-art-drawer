import { useState, useCallback } from 'react'
import ColorPanel from './components/ColorPanel'
import PixelGrid from './components/PixelGrid'
import './App.css'

const COLS = 50
const ROWS = 50
const CELL_SIZE = 10
const DEFAULT_COLOR = '#ffffff'

function createInitialGrid() {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => DEFAULT_COLOR)
  )
}

function App() {
  const [grid, setGrid] = useState(createInitialGrid)
  const [selectedColor, setSelectedColor] = useState('#000000')

  const handleCellClick = useCallback((row, col) => {
    setGrid((prev) => {
      const next = prev.map((r) => [...r])
      next[row][col] = selectedColor
      return next
    })
  }, [selectedColor])

  return (
    <div className="app">
      <aside className="color-panel-wrapper">
        <ColorPanel
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
      </aside>
      <main className="canvas-area">
        <PixelGrid
          grid={grid}
          onCellClick={handleCellClick}
          cellSize={CELL_SIZE}
        />
      </main>
    </div>
  )
}

export default App
