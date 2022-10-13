import Head from "next/head";
import ThemedLink from "../components/styledLinks/ThemedLink";
import SearchBox from "../components/search/SearchBox";
import StoryView from "../components/blogStory/StoryView";
import QuestionView from "../components/questionAndAnswers/QuestionView";

export default function Home() {
  return (
    <>
      <Head>
        <title>College Overflow</title>
        <meta
          name="description"
          content="A Place For High Schoolers Applying To College"
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <main className="grid grid-cols-4 gap-6 place-content-center m-3">
       
          <div className="col-start-1 col-end-2 ">
            <ThemedLink to="/stories"> Stories And Advice </ThemedLink>
          </div>
          <div className="col-start-3 ">
            <ThemedLink to="/QandA"> Ask Questions </ThemedLink>
          </div>
       

        <div className="col-span-4">
          <SearchBox placeholder="Search College Overflow.." />
        </div>


        <StoryView
          title="How I got into Stanford with an SAT score of 900"
          author="Oluwa Bezos"
          datePublished="14-03-2021"
          story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam commodi molestias similique impedit provident iste eveniet ratione et dolorem nam illum necessitatibus odio blanditiis, debitis qui nostrum ad temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam commodi molestias similique impedit provident iste eveniet ratione et dolorem nam illum necessitatibus odio blanditiis, debitis qui nostrum ad temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam commodi molestias similique impedit provident iste eveniet ratione et dolorem nam illum necessitatibus odio blanditiis, debitis qui nostrum ad temporibus!"
        />


        <QuestionView>
          <h4>Is MIT Test Optional?</h4>
        </QuestionView>
        <StoryView
          title="How I got into Stanford with an SAT score of 900"
          author="Oluwa Bezos"
          datePublished="14-03-2021"
          story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam commodi molestias similique impedit provident iste eveniet ratione et dolorem nam illum necessitatibus odio blanditiis, debitis qui nostrum ad temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam commodi molestias similique impedit provident iste eveniet ratione et dolorem nam illum necessitatibus odio blanditiis, debitis qui nostrum ad temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam commodi molestias similique impedit provident iste eveniet ratione et dolorem nam illum necessitatibus odio blanditiis, debitis qui nostrum ad temporibus!"
        />
        <QuestionView>
          <h4>Will I Get Into Havard?</h4>
        </QuestionView>
        <StoryView
          title="How To Organise Your Activity list"
          author="Oluwa Bezos"
          datePublished="14-03-2021"
          story="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam commodi molestias similique impedit provident iste eveniet ratione et dolorem nam illum necessitatibus odio blanditiis, debitis qui nostrum ad temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam commodi molestias similique impedit provident iste eveniet ratione et dolorem nam illum necessitatibus odio blanditiis, debitis qui nostrum ad temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam commodi molestias similique impedit provident iste eveniet ratione et dolorem nam illum necessitatibus odio blanditiis, debitis qui nostrum ad temporibus!"
        />
      </main>
    </>
  );
}
