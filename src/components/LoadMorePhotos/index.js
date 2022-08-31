import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadNewPhotos } from '../../store/photos'

import { Loading } from '../Loading'

import styles from './LoadMorePhotos.module.css'

export const LoadMorePhotos = () => {
  const { page, infinite, loading } = useSelector(state => state.photos)
  const dispatch = useDispatch()

  function handleLoadMorePhotos() {
    dispatch(loadNewPhotos(page + 1))
  }

  if(loading) return <Loading />
  if(!infinite) return null
  return (
    <button
    onClick={handleLoadMorePhotos}
    className={styles.button}>
      +
    </button>
  )
}
