import { configureStore } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import { filtersReducer } from 'features/filter/filter-slice'
import { positionsReducer } from 'features/positions/position-slice';

const rootReducer = combineReducers({
	filters: filtersReducer,
	positions: positionsReducer
})

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['filters']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoreActions: [
				FLUSH,
				REHYDRATE,
				PAUSE,
				PERSIST,
				PURGE,
				REGISTER
			]
		}
	})
})

export const persistor = persistStore(store)