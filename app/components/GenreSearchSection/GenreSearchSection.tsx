import React from 'react'
import Typography from '../Typography/Typography'
import Card from '../Cards/Card'
import { JikanManga } from '@/app/types/Manga/Jikan/JikanMangaTypes'

export default function GenreSearchSection({title, datas}: {title:string, datas: JikanManga[]}) {
  return (
    <section className="container">
      <Typography variant={"h5"} className="text-primary">
        {" "}
        {title}
      </Typography>
      {(datas.length > 0) && (
        <>
          <div className="mt-6 flex flex-wrap gap-6">
            {datas.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>

        </>
      )}
    </section>
  )
}
