import { format } from "date-fns";

export default function Image(props) {
  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5">
        <img 
          src={props.urls.full} 
          alt={props.user.name} 
          loading="lazy"
          className="h-52 w-full object-cover rounded-3xl md:h-80"
        />

        <article className="flex items-center justify-between flex-wrap">
          <div className="pt-5 flex items-center justify-start">
            <img
              src={props.user.profile_image.large}
              alt={props.user.name}
              loading="lazy"
              className="w-20 rounded-full shadow"
            />

            <ul className="ml-3 font-roboto">
              <li className="font-bold text-slate-800 mb-1">
                {props.user.name}
              </li>
              <li className="text-slate-600 text-sm">
                {format(new Date(props.created_at), "dd MMMM yyy")}  
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-slate-600 text-sm text-right font-roboto">
              <li>
                <a 
                href={`https://instagram.com/${props.user.instagram_username}`} 
                target="_blank"
                className="underline"
                >
                    Instagram
                </a>
              </li>
              <li>{props.likes} likes</li>
            </ul>
          </div>
        </article>
      </article>
    </>
  )
}