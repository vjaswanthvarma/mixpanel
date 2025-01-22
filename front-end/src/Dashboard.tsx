import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { useState } from "react";
export default function Dashboard(){
    const [cat, setcat] = useState("");
    return(
        <div className="flex items-center justify-center">
            <Card className="w-1/2 flex items-center justify-center mt-10">
            <CardContent className="flex flex-col gap-5 mt-10">
                <Button onClick={async()=>{
                    setcat("like");
                    await fetch("http://localhost:8000/track", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({cat})
                        
                    })
                }}>Like</Button>
                <Button onClick={async()=>{
                    setcat("dislike");
                    await fetch("http://localhost:8000/track", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(cat)
                        
                    })
                }}>Dislike</Button>
            </CardContent>
            </Card>
        </div>
    )
}