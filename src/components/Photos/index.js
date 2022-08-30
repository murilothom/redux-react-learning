import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../../store/photos'
import { PhotosContent } from '../PhotosContent'

export const Photos = () => {
  const { data } = useSelector(state => state.photos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhotos(1))
  }, [dispatch])

  return (
    <section>
      {data && <PhotosContent />}
    </section>
  )
}
