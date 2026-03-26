// Inside your Tabs component in app/(tabs)/_layout.tsx
<Tabs.Screen
  name="post-food"
  options={{
    title: 'Post Food',
    tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus.circle.fill" color={color} />,
  }}
/>