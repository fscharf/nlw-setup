interface HabitProps {
  completed: number
}

function Habit({ completed }: HabitProps): JSX.Element {
  return (
    <div className="bg-zinc-800 w-10 h-10 text-white rounded m-2 flex items-center justify-center">
      {completed}
    </div>
  )
}

export default Habit
