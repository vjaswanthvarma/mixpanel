import { useState } from "react"
import { Button } from "./components/ui/button";
import {Card, CardContent} from "./components/ui/card";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [username, setUsername]=useState({"name":"","email":"","id":""});
    const navigate = useNavigate();

    return(<>
    <div className="flex items-center justify-center">
        <Card className="w-1/2 flex items-center justify-center mt-10">
            <CardContent className="flex flex-col gap-5 mt-10">
                    <input placeholder="Username" value={username.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername({...username, name: e.target.value})} className="border border-slate-500" />
                    <input placeholder="Email" value={username.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername({...username, email: e.target.value})} className="border border-slate-500" />
                    <input placeholder="ID" value={username.id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername({...username, id: e.target.value})} className="border border-slate-500"/>
                    <Button onClick={async () => {
                         await fetch("http://localhost:8000/demo", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(username)
                        }).then((res)=>res.json()).then((data)=>{
                            if(data.message){
                                navigate("/dashboard");
                            }
                        });
                    }}>Submit</Button>
            </CardContent>
        </Card>
        </div>
    </>
    )
}