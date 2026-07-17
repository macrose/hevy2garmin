import { ScrollView, View } from "react-native";
import { Text, Card, Badge, Button, ProgressBar } from "soma-style";

/** hevy2garmin sync dashboard — rebuilt on the shared universal soma-style library. */
export default function SyncScreen() {
  const workouts = [
    { name: "Back & Biceps", when: "Today · 07:12", status: "synced" as const, kcal: 564 },
    { name: "Chest & Triceps", when: "Yesterday · 18:30", status: "synced" as const, kcal: 358 },
    { name: "Leg Day", when: "Jul 15 · 06:45", status: "pending" as const, kcal: 421 },
  ];

  return (
    <ScrollView className="flex-1 bg-base" contentContainerClassName="items-center px-5 py-6">
      <View className="w-full max-w-2xl gap-4">
        <View className="flex-row items-center gap-2">
          <Text variant="title">Sync status</Text>
          <Badge label="Garmin connected" tone="success" />
        </View>

        {/* Connection cards */}
        <View className="flex-row gap-3">
          <Card className="flex-1 gap-1">
            <Text variant="eyebrow">Hevy</Text>
            <Text variant="title" className="text-teal">Connected</Text>
            <Text variant="micro">Last pull 2m ago</Text>
          </Card>
          <Card className="flex-1 gap-1">
            <Text variant="eyebrow">Garmin</Text>
            <Text variant="title" className="text-teal">Connected</Text>
            <Text variant="micro">DI token valid</Text>
          </Card>
        </View>

        {/* This week */}
        <Card className="gap-3">
          <Text variant="eyebrow">This week</Text>
          <View className="flex-row items-end gap-2">
            <Text variant="display">12</Text>
            <Text variant="title" className="text-text-muted">workouts synced</Text>
          </View>
          <ProgressBar pct={0.8} color="#6ad4a0" />
          <Text variant="caption" className="text-text-secondary">FIT upload success rate · 98%</Text>
        </Card>

        {/* Recent workouts */}
        <View className="gap-2">
          <Text variant="eyebrow">Recent</Text>
          {workouts.map((w) => (
            <Card key={w.name} className="gap-2">
              <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-2">
                  <Text variant="body" className="text-text">{w.name}</Text>
                  <Text variant="micro">{w.when} · {w.kcal} kcal</Text>
                </View>
                {w.status === "synced" ? (
                  <Badge label="Synced" tone="success" />
                ) : (
                  <Button label="Sync now" variant="primary" size="sm" />
                )}
              </View>
            </Card>
          ))}
        </View>

        <Button label="Sync all pending" variant="primary" size="lg" />
      </View>
    </ScrollView>
  );
}
