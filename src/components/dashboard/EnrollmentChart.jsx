import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export function EnrollmentChart({ enrollmentData }) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Enrollment Performance</h2>
        <p className="text-sm text-muted-foreground">
          Applications, admissions, and enrollments across sessions
        </p>
      </div>

      <div className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={enrollmentData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="colorApplications"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorAdmitted" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--accent))"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--accent))"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorEnrolled" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--success))"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--success))"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="session"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              className="text-muted-foreground"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              className="text-muted-foreground"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="applications"
              name="Applications"
              stroke="hsl(var(--primary))"
              fillOpacity={1}
              fill="url(#colorApplications)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="admitted"
              name="Admitted"
              stroke="hsl(var(--accent))"
              fillOpacity={1}
              fill="url(#colorAdmitted)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="enrolled"
              name="Not Admitted"
              stroke="hsl(var(--success))"
              fillOpacity={1}
              fill="url(#colorEnrolled)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center p-3 rounded-lg bg-primary/10">
          <p className="text-2xl font-bold text-primary">
            {enrollmentData[enrollmentData.length - 1].applications}
          </p>
          <p className="text-xs text-muted-foreground">Total Applications</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-accent/10">
          <p className="text-2xl font-bold text-accent-foreground">
            {enrollmentData[enrollmentData.length - 1].admitted}
          </p>
          <p className="text-xs text-muted-foreground">Admitted</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-success/10">
          <p className="text-2xl font-bold text-success">
            {enrollmentData[enrollmentData.length - 1].enrolled}
          </p>
          <p className="text-xs text-muted-foreground">Not Admitted</p>
        </div>
      </div>
    </div>
  );
}
