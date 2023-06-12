import React, { useEffect, useState } from 'react'
import axios from 'axios'

declare const window: typeof globalThis & {
  naver: any
}

interface MapProps {
  algorithm: string | undefined
}

export default function Map({ algorithm }: MapProps) {
  const [taskList, setTaskList] = useState<Record<string, any>>({})
  const fetchData1 = async (url: string) => {
    console.log('fetch', algorithm)
    console.log('fetch', url)
    try {
      const response = await axios.get(url)
      console.log(response.data.TaskList)
      setTaskList(response.data.TaskList)
      return response.data.TaskList
    } catch (e) {
      console.log(e)
      setTaskList({})
    }
  }
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  useEffect(() => {
    console.log('algorithm in map', algorithm)
    if (algorithm === 'dbscan') {
      const url = 'http://211.245.51.165:15000/dbscan'
      fetchData1(url)
    } else if (algorithm === 'hierachical') {
      const url = 'http://211.245.51.165:15000/hierachical'
      fetchData1(url)
    } else if (algorithm === 'spectral') {
      const url = 'http://211.245.51.165:15000/spectral'
      fetchData1(url)
    } else {
      const url = 'http://211.245.51.165:15000/kmeans'
      fetchData1(url)
    }
  }, [algorithm])
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=t6fdm1o714&callback=CALLBACK_FUNCTION'
    document.head.appendChild(script)

    script.onload = () => {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(35.1399034730192, 128.50650652599728),
        zoom: 14,
      })

      const cadastralLayer = new naver.maps.CadastralLayer()
      naver.maps.Event.once(map, 'init', function () {
        cadastralLayer.setMap(map)
      })

      // Fetch the current map bounds
      const mapBounds = map.getBounds()
      if (taskList) {
        // Iterate over each task in the taskList
        Object.entries(taskList).forEach(([taskName, task]) => {
          // Iterate over each polygon in the PolygonList of the task
          const fillColor = getRandomColor() // Get a random color for each polygon
          Object.entries(task.PolygonList).forEach(([polygonName, polygon]: [string, any]) => {
            const paths = polygon.map(([longitude, latitude]: [number, number]) =>
              new window.naver.maps.LatLng(latitude, longitude).toArray(),
            )

            const strokeColor = '#2f156d'
            const fillOpacity = 1
            const strokeOpacity = 0.6
            const strokeWeight = 3

            const polygonWithinBounds = (paths: [number, number][], bounds: any) => {
              for (let i = 0; i < paths.length; i++) {
                if (!bounds.hasLatLng(new window.naver.maps.LatLng(paths[i][1], paths[i][0]))) {
                  return false
                }
              }
              return true
            }

            // Check if the polygon is within the current map bounds
            if (polygonWithinBounds(paths, mapBounds)) {
              // Create a polygon for each task's polygon
              const naverPolygon = new window.naver.maps.Polygon({
                map: map,
                paths: paths,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
                strokeColor: strokeColor,
                strokeOpacity: strokeOpacity,
                strokeWeight: strokeWeight,
              })
            }
          })
        })
      }
    }
  }, [algorithm, taskList])

  return <div id='map' style={{ width: '100%', height: '100%', flexGrow: 0 }}></div>
}
