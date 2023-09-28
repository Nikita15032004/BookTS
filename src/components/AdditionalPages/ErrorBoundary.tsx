import React from 'react';
import NotFoundPageSpinner from '../../UI/NotFoundPageSpinner';
///////////////////

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error('Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div className='max-w-4xl mx-auto mt-10'>
                        <div className='mx-5'>
                            <div className='text-4xl text-red-400 text-center'>Aplication Error!</div>
                            <NotFoundPageSpinner />
                            <div className='text-lg text-center mt-2'>Something went Wrong! Reload the page or try to visit the aplication later!</div>
                        </div>
                    </div>
                </>
            )

        }

        return this.props.children;
    }
}

export default ErrorBoundary;
