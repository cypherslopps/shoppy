"use client";

import { 
	createContext, 
	ReactNode, 
	FC,
	useContext 
} from "react";
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/config";

interface IAuthContext {
	user: any
	isLoading: boolean
	register: () => void
	login: () => void
	loginWithGoogle: () => void
}

interface IAuthProvider {
	children: ReactNode
}

export const AuthContext = createContext<IAuthContext>({
	user: null,
	isLoading: false,
	login: () => {},
	register: () => {},
	loginWithGoogle: () => {}
});

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);


	// Register user
	const register = async (payload: { email: string, password: string }) => {	    
	    try {
	        const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password);

	        return response;
	    } catch (e) {
	        throw new Error(e);
	    }
	}

	// Login user
	const login = async (payload: { email: string, password: string }) => {	    
	    try {
	        const response = await signInWithEmailAndPassword(auth, payload.email, payload.password);

	        return response;
	    } catch (e) {
	        throw new Error(e);
	    }
	}

	const loginWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		
		try {
			const response = await signInWithPopup(auth, provider);	
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(response);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = response.user;
			console.log(user);
		} catch(error) {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;

			// The email of the user's account used.
			const email = error.customData.email;

			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		};
	};

	return (
		<AuthContext.Provider value={{
			user,
			isLoading,
			login,
			register,
			loginWithGoogle
		}}>
			{children}
		</AuthContext.Provider>
	)	
}

export const useAuth = () => {
	const authContext = useContext(AuthContext);

	if(!authContext)
		return ``;

	return authContext; 
}
