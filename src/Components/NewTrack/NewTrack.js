import React from'react'

export default function NewTrack (props) {


return (
<>
<li>Artist: {props.result.artist}- Song: {props.result.title}- Album: {props.result.album}</li>
</>
)
}