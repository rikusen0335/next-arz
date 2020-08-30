type Props = {
  title: string
  description: string
}

export const IntroductionSelection = (props: Props) => {
  return (
    <div className="mt-16" style={{ marginBottom: 128 }}>
      <span className="relative z-10 px-2 py-1 ml-12 text-3xl font-bold text-black bg-white">
        {props.title}
      </span>
      <div className="relative">
        <p style={{ backgroundColor: '#383B40', top: -20 }} className="absolute w-full p-8 text-xl text-white">
          {props.description}
        </p>
      </div>
    </div>
  )
}
