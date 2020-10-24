type Props = {
  title: string
  description: string
}

export const IntroductionSelection = (props: Props) => {
  return (
    <div className="my-20">
      <div className="relative">
        <span className="absolute z-10 px-2 py-1 ml-12 text-3xl font-bold text-black bg-white -top-32">
          {props.title}
        </span>
      </div>
      <div>
        <p style={{ backgroundColor: '#383B40', top: -20 }} className="w-full p-8 text-xl text-white">
          {props.description}
        </p>
      </div>
    </div>
  )
}
