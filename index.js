import { useState } from 'react'

export default function Home() {
  const [hourlyRate, setHourlyRate] = useState(575)
  const [monthlyHours, setMonthlyHours] = useState(0)
  const [fixedCosts, setFixedCosts] = useState(50490)

  const revenue = monthlyHours * hourlyRate
  const profit = revenue - fixedCosts

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20, fontFamily: 'Arial' }}>
      <h1>BOR-EL BudgetApp</h1>
      <label>Timepris (kr)</label><br />
      <input type="number" value={hourlyRate} onChange={e => setHourlyRate(+e.target.value)} /><br /><br />
      <label>Fakturerede timer pr. måned</label><br />
      <input type="number" value={monthlyHours} onChange={e => setMonthlyHours(+e.target.value)} /><br /><br />
      <label>Faste udgifter pr. måned (kr)</label><br />
      <input type="number" value={fixedCosts} onChange={e => setFixedCosts(+e.target.value)} /><br /><br />
      <h2>Omsætning: {revenue.toLocaleString()} kr</h2>
      <h2 style={{ color: profit >= 0 ? 'green' : 'red' }}>
        {profit >= 0 ? 'Overskud' : 'Underskud'}: {profit.toLocaleString()} kr
      </h2>
    </div>
  )
}