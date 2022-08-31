import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadNewPhotos } from '../../store/photos'

import { LoadMorePhotos } from '../LoadMorePhotos'
import { PhotosContent } from '../PhotosContent'

export const Photos = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadNewPhotos(1))
  }, [dispatch])

  return (
    <section>
      <PhotosContent />
      <LoadMorePhotos />
    </section>
  )
}
