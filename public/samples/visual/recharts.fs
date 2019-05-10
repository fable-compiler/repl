module Recharts

open Fable.Recharts
open Fable.Recharts.Props
module R = Fable.React.Standard
module P = Fable.React.Props

module Data =
  let data =
      [| {| name = "Page A"; uv = 4000; pv = 2400; amt = 2400 |}
         {| name = "Page B"; uv = 3000; pv = 1398; amt = 2210 |}
         {| name = "Page C"; uv = 2000; pv = 9800; amt = 2290 |}
         {| name = "Page D"; uv = 2780; pv = 3908; amt = 2000 |}
         {| name = "Page E"; uv = 1890; pv = 4800; amt = 2181 |}
         {| name = "Page F"; uv = 2390; pv = 3800; amt = 2500 |}
         {| name = "Page G"; uv = 3490; pv = 4300; amt = 2100 |}
      |]

  let data01 =
      [| {| day = "05-01"; weather = "sunny" |}
         {| day = "05-02"; weather = "sunny" |}
         {| day = "05-03"; weather = "cloudy" |}
         {| day = "05-04"; weather = "rain" |}
         {| day = "05-05"; weather = "rain" |}
         {| day = "05-06"; weather = "cloudy" |}
         {| day = "05-07"; weather = "cloudy" |}
         {| day = "05-08"; weather = "sunny" |}
         {| day = "05-09"; weather = "sunny" |}
      |]

  let data02 =
      [| {| name = "Page A"; uv = 4000; pv = 2400; amt = 2400 |}
         {| name = "Page B"; uv = 3000; pv = 1398; amt = 2210 |}
         {| name = "Page C"; uv = 2000; pv = 9800; amt = 2290 |}
         {| name = "Page D"; uv = 2780; pv = 3908; amt = 2000 |}
         {| name = "Page E"; uv = 1890; pv = 4800; amt = 2181 |}
      |]

  let rangeData =
      [| {| day = "05-01"; temperature = (-1, 10) |}
         {| day = "05-02"; temperature = (2, 15) |}
         {| day = "05-03"; temperature = (3, 12) |}
         {| day = "05-04"; temperature = (4, 12) |}
         {| day = "05-05"; temperature = (12, 16) |}
         {| day = "05-06"; temperature = (5, 16) |}
         {| day = "05-07"; temperature = (3, 12) |}
         {| day = "05-08"; temperature = (0, 8) |}
         {| day = "05-09"; temperature = (-3, 5) |}
     |]

open Data

let margin t r b l =
    Chart.Margin { top = t; bottom = b; right = r; left = l }

let lineChartSample =
    lineChart
        [ margin 5. 20. 5. 0.
          Chart.Width 600.
          Chart.Height 300.
          Chart.Data data ]
        [ line
            [ Cartesian.Type Monotone
              Cartesian.DataKey "uv"
              P.Stroke "#8884d8"
              P.StrokeWidth 2. ]
            []
          cartesianGrid
            [ P.Stroke "#ccc"
              P.StrokeDasharray "5 5" ]
            []
          xaxis [Cartesian.DataKey "name"] []
          yaxis [] []
          tooltip [] []
        ]

let barChartSample =
    barChart
        [ margin 5. 20. 5. 0.
          Chart.Width 600.
          Chart.Height 300.
          Chart.Data data ]
        [ xaxis [Cartesian.DataKey "name"] []
          yaxis [] []
          tooltip [] []
          legend [] []
          cartesianGrid [P.StrokeDasharray "3 3"] []
          bar [Cartesian.DataKey "pv"; Cartesian.StackId "a"; P.Fill "#8884d8"] []
          bar [Cartesian.DataKey "uv"; Cartesian.StackId "a"; P.Fill "#82ca9d"] []
        ]

let areaChartSample =
    areaChart
        [ margin 10. 30. 0. 0.
          Chart.Width 730.
          Chart.Height 250.
          Chart.Data data ]
        [
          R.defs []
            [ R.linearGradient
                [ P.Id "colorUv"; P.X1 0.; P.Y1 0.; P.X2 0.; P.Y2 1.]
                [ R.stop [ P.Offset "5%"; P.StopColor "#8884d8"; P.StopOpacity 0.8 ] []
                  R.stop [ P.Offset "95%"; P.StopColor "#8884d8"; P.StopOpacity 0 ] [] ]
              R.linearGradient
                [ P.Id "colorPv"; P.X1 0.; P.Y1 0.; P.X2 0.; P.Y2 1.]
                [ R.stop [ P.Offset "5%"; P.StopColor "#82ca9d"; P.StopOpacity 0.8 ] []
                  R.stop [ P.Offset "95%"; P.StopColor "#82ca9d"; P.StopOpacity 0 ] [] ] ]
          xaxis [ Cartesian.DataKey "name" ] []
          yaxis [] []
          cartesianGrid [P.StrokeDasharray "3 3"] []
          tooltip [] []
          area
            [ Cartesian.Type Monotone
              Cartesian.DataKey "uv"
              Cartesian.Stroke "#8884d8"
              P.Fill "url(#colorUv)"
              P.FillOpacity 1 ] []
          area
            [ Cartesian.Type Monotone
              Cartesian.DataKey "pv"
              Cartesian.Stroke "#82ca9d"
              P.Fill "url(#colorPv)"
              P.FillOpacity 1 ] []
        ]

open Fable.React

let renderApp() =
    mountById "container1" lineChartSample
    mountById "container2" barChartSample
    mountById "container3" areaChartSample

renderApp()
