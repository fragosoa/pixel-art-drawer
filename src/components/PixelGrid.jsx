export default function PixelGrid({ grid, onCellClick, cellSize }) {
  return (
    <div
      className="pixel-grid"
      style={{
        width: 500,
        height: 500,
        display: 'grid',
        gridTemplateColumns: `repeat(${grid[0].length}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${grid.length}, ${cellSize}px)`,
        gap: 0,
        padding: 0,
        border: '1px solid #444',
        boxSizing: 'border-box',
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((color, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            type="button"
            className="pixel-grid__cell"
            style={{
              width: cellSize,
              height: cellSize,
              minWidth: cellSize,
              minHeight: cellSize,
              backgroundColor: color,
              margin: 0,
              padding: 0,
              border: 'none',
              outline: '1px solid #555',
              cursor: 'pointer',
            }}
            onClick={() => onCellClick(rowIndex, colIndex)}
            aria-label={`Pixel ${rowIndex}, ${colIndex}`}
          />
        ))
      )}
    </div>
  )
}
