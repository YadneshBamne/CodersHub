import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function NoteCard({ title, text, date }) {
  return (
    <Card className="hover:shadow-lg transition duration-300 bg-card border-border">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground">
          {text.length > 100 ? `${text.substring(0, 100)}...` : text}
        </p>
      </CardContent>
    </Card>
  );
}

