import { AppStateStatus } from 'react-native';
import { TelnyxVoipClient } from '../telnyx-voip-client';
interface UseAppStateHandlerOptions {
    voipClient: TelnyxVoipClient;
    disconnectOnBackground?: boolean;
    navigateToLoginOnDisconnect?: boolean;
    /** Called when the SDK wants to navigate to a login/home screen after disconnect */
    onNavigateToLogin?: () => void;
    debug?: boolean;
}
/**
 * Hook to handle app state changes for VoIP behavior
 * When app goes to background without an active call, disconnect socket and redirect to login
 */
export declare const useAppStateHandler: ({ voipClient, disconnectOnBackground, navigateToLoginOnDisconnect, onNavigateToLogin, debug, }: UseAppStateHandlerOptions) => {
    currentAppState: AppStateStatus;
};
export {};
