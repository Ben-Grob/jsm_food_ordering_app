import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAppwrite from "@/lib/useAppwrite"
import {getCategories, getMenu} from "@/lib/appwrite"
import React from 'react'
import seed from "@/lib/seed"
import {useLocalSearchParams} from "expo-router";
import {useEffect} from "react";

const search = () => {
    const { category, query } = useLocalSearchParams<{query: string; category: string}>()

    const { data, refetch, loading } = useAppwrite({ fn: getMenu, params: { category,  query,  limit: 6, } });
    const { data: categories } = useAppwrite({ fn: getCategories });

    useEffect(() => {
        refetch({category, query, limit: 6})
    }, [category, query]);
    
    return (
        <SafeAreaView className="bg-white h-full">
            <FlatList data={data} renderItem={({ item, index }) => {
                return (
                    <View className="flex-1 max-w-[48%]">
                        <Text>Menu Card</Text>
                    </View>
                )
            }} />
        <Text>search</Text>

        <Button title="Seed" onPress={() => seed().catch((error) => console.log('Failed to seed the database.', error))} />
        </SafeAreaView>
  )
}

export default search