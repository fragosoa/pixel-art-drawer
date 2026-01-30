const PRESETS = [
  '#000000',
  '#ffffff',
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ffff00',
  '#ff00ff',
  '#00ffff',
  '#808080',
  '#ffa500',
]

export default function ColorPanel({ selectedColor, onColorChange }) {
  return (
    <div className="color-panel">
      <label className="color-panel__label">Color</label>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => onColorChange(e.target.value)}
        className="color-panel__input"
        aria-label="Pick a color"
      />
      <div className="color-panel__preview" style={{ backgroundColor: selectedColor }} />
      <p className="color-panel__presets-label">Presets</p>
      <div className="color-panel__presets">
        {PRESETS.map((color) => (
          <button
            key={color}
            type="button"
            className="color-panel__swatch"
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
            aria-label={`Select ${color}`}
            title={color}
          />
        ))}
      </div>
    </div>
  )
}
