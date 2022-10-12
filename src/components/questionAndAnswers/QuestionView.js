const QuestionView = ({children}) => {
    return (
      <article className="bg-purple-500 rounded-sm h-full w-full p-8  col-span-4 text-center border-2 border-slate-700">
        <div>{children}</div>
      </article>
    );
}

export default QuestionView;